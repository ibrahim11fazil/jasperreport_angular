package qa.gov.customs.workflowcamuda.service.workflow;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.camunda.bpm.engine.*;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.DelegateTask;
import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.HistoricIdentityLinkLog;
import org.camunda.bpm.engine.history.HistoricTaskInstance;
import org.camunda.bpm.engine.repository.ProcessDefinition;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Comment;
import org.camunda.bpm.engine.task.Task;
import org.camunda.bpm.engine.variable.Variables;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.config.Publisher;
import qa.gov.customs.workflowcamuda.entity.UserMaster;
import qa.gov.customs.workflowcamuda.model.*;
import qa.gov.customs.workflowcamuda.proxy.*;
import qa.gov.customs.workflowcamuda.service.RequestService;
import qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants;
import qa.gov.customs.workflowcamuda.utils.WorkflowStatus;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.*;

import static qa.gov.customs.workflowcamuda.service.workflow.WorkflowConstants.*;
import static qa.gov.customs.workflowcamuda.utils.MessageUtil.*;
import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.*;


@Component
@Qualifier("workflowImpl")
public class WorkflowImpl {



    private static final Logger logger = LoggerFactory.getLogger(WorkflowImpl.class);
    private final EmployeeProxyOverridenController userProxyService;
    private final WorkflowProxyOverridenController userSSOProxy;
    private final NotificationProxyService notificationProxyService;
    private final TrainingProxyService trainingProxyService;
    @Autowired
    private RuntimeService runtimeService;
    @Autowired
    private TaskService taskService;
    @Autowired
    private HistoryService historyService;
    @Value("${workflowtoken}")
    private String workflowToken;
    @Autowired
    private RequestService requestService;
    @Autowired
    private Publisher publisher;

    @Autowired
    public WorkflowImpl(EmployeeProxyOverridenController userProxyService,
                        NotificationProxyService notificationProxyService,
                        TrainingProxyService trainingProxyService,
                        WorkflowProxyOverridenController userSSOProxy) {
        this.userProxyService = userProxyService;
        this.notificationProxyService = notificationProxyService;
        this.trainingProxyService = trainingProxyService;
        this.userSSOProxy = userSSOProxy;
    }


    //Initial process for all requests
    public boolean startProcessWFType1(UserRequestModel model, String type) {
        try {
            model.setCreatedOn(new Date().toString());
           // Map<String, Object> vars = Collections.<String, Object>singletonMap(WORKFLOW_APPLICANT_VARIABLE, model);
           final  Map<String, Object> vars = new HashMap<>();
           vars.put(WORKFLOW_APPLICANT_VARIABLE, model);
           vars.put(WORKFLOW_REQUEST_UUID,model.getTrainingRequestId());
            ProcessInstance processInstance = null;
            ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
            if (type.equals(WorkFlowRequestConstants.TYPE_1_EMPLOYEE_REQUEST)) {

                ProcessDefinition pd = processEngine.getRepositoryService().createProcessDefinitionQuery()
                        .processDefinitionKey(TYPE_1_PROCESS)
                        .latestVersion() //now 46
                        //.processDefinitionVersion(46) // This version is available in DB when changing the process diagram
                        .versionTag(TYPE_1_PROCESS_VERSION_2) // This should be changed for new versions
                        .singleResult();
               processInstance = processEngine.getRuntimeService().startProcessInstanceById(pd.getId(), vars);

//                processInstance = processEngine.getRuntimeService().startProcessInstanceById(pd.getId(),
//                        Variables.putValue(WORKFLOW_APPLICANT_VARIABLE,model).put(WORKFLOW_REQUEST_UUID,model.getTrainingRequestId()));

                //processInstance = runtimeService.startProcessInstanceById(TYPE_1_PROCESS,vars);

                //processInstance = runtimeService.startProcessInstanceByKey(TYPE_1_PROCESS, vars);
                //processInstance = runtimeService.startProcessInstanceByKey(TYPE_1_PROCESS, vars);
            } else if (type.equals(WorkFlowRequestConstants.TYPE_2_COURSE_SUGGESTION_BY_HEAD_OF_SECTION)) {

                ProcessDefinition pd = processEngine.getRepositoryService().createProcessDefinitionQuery()
                        .processDefinitionKey(TYPE_2_PROCESS)
                        .latestVersion() //now 46
                        //.processDefinitionVersion(46) // This version is available in DB when changing the process diagram
                        .versionTag(TYPE_2_PROCESS_VERSION) // This should be changed for new versions
                        .singleResult();
                processInstance = processEngine.getRuntimeService().startProcessInstanceById(pd.getId(), vars);
                //processInstance = runtimeService.startProcessInstanceByKey(TYPE_2_PROCESS, vars);

                //processInstance = runtimeService.startProcessInstanceByKey(TYPE_2_PROCESS, vars);
            } else if (type.equals(TYPE_3_TRAINING_REQUEST_FROM_HEAD)) {
                processInstance = runtimeService.startProcessInstanceByKey(TYPE_3_PROCESS, vars);
            } else if (type.equals(TYPE_4_CIS_COURSE_REQUEST)) {
                processInstance = runtimeService.startProcessInstanceByKey(TYPE_4_PROCESS, vars);
            } else if (type.equals(TYPE_5_AUDIT_MANAGER_COURSE_REQUEST)) {
                processInstance = runtimeService.startProcessInstanceByKey(TYPE_5_PROCESS, vars);
            } else if (type.equals(TYPE_8_EMPLOYEE_SUBSTITUTE_REQUEST)) {
                processInstance = runtimeService.startProcessInstanceByKey(TYPE_8_PROCESS, vars);
            }
            //TODO here wait 1 min to create the project --> error some time
            if (processInstance.getId() != null) {
                boolean status = userRequestAndCompleteTask(model, processInstance.getId());
                if (status) {
                    requestService.saveOrUpdateWorkflow(model, WorkflowStatus.CREATED);
                } else {
                    requestService.saveOrUpdateWorkflow(model, WorkflowStatus.FAILED);
                }
                return status;
            }
            return false;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }

    }

    public List<Task> getTasks(String assignee) {
        return taskService.createTaskQuery().taskAssignee(assignee).list();
    }

    public List<Task> getTaskById(String taskId) {
        return taskService.createTaskQuery().taskId(taskId).list();
    }

    public List<Task> getTasksPagenated(String assignee, int firstResult, int maxResult) {
        return taskService.createTaskQuery().taskAssignee(assignee).listPage(firstResult, maxResult);
    }

    public List<Task> getCandidateTasks(String delegations) {
        //return  taskService.createTaskQuery().taskCandidateUser(delegations).list();
        return taskService.createTaskQuery()
                .or()
                .taskAssignee(delegations)
                .taskCandidateUser(delegations)
                .includeAssignedTasks()
                .endOr()
                .list();
    }

    public List<Task> getCandidateTasksPagenated(String delegations, int firstResult, int maxResult) {
        //return  taskService.createTaskQuery().taskCandidateUser(delegations).list();
        return taskService.createTaskQuery()
                .or()
                .taskAssignee(delegations)
                .taskCandidateUser(delegations)
                .includeAssignedTasks()
                .endOr()
                .listPage(firstResult, maxResult);
    }

    public UserRequestModel getProcessDetails(String executionId) {
        try {
            UserRequestModel variables = (UserRequestModel) runtimeService.getVariable(executionId, "applicant");
            logger.info(variables.getEmail());
            return variables;
        } catch (Exception e) {
            e.printStackTrace();
            logger.error(e.toString());
            //TODO log and
        }
        return null;
    }

    @Transactional
    public boolean processTask(String taskId, String userId, String processId, String role, String action, String executionId, String processInstanceId, String message) {
        try {
            runtimeService.setVariable(executionId, role, action);
            if (message != null && processInstanceId != null)
                taskService.createComment(taskId, processInstanceId, message);
            logger.info("Task ### " + taskId);
            taskService.complete(taskId, null);
            //TODO get the task
            return true;
        } catch (Exception e) {
            logger.error(e.toString());
            //TODO log error
            return false;
        }

    }


    public String getTaskMessages(String taskId){
        List<Task>  tasks =   getTaskById(taskId);
        if(taskId!=null && tasks.size()>0){
            for (Task item : tasks) {
                if (item.getName().equals("Head Of Training Approval")) {
                    return MESSAGE_TASK_HEAD_APPROVED;
                }
            }

        }else {
            return null;
        }
         return null;
    }

    public List<HistoricDetail> getUserTaskByProcessId(String processId) {
        return historyService.createHistoricDetailQuery()
                .variableUpdates()
                .processInstanceId(processId)
                .orderByVariableName().asc()
                .list();

    }


    public List<Comment> getComments(String taskId) {
        return taskService.getTaskComments(taskId);

    }


    public Comment saveComment(String taskId, String processInstanceId, String message) {
        return taskService.createComment(taskId, processInstanceId, message);
    }

    public List<HistoricDetail> getUserTaskByExecutionIdId(String executionId) {
        return historyService.createHistoricDetailQuery()
                .variableUpdates()
                .executionId(executionId)
                .orderByVariableName().asc()
                .list();

    }

    //Task listing
    public List<HistoricTaskInstance> getUserTaskByTaskIdId(String executionId) {
        return historyService.createHistoricTaskInstanceQuery()
                .executionId(executionId)
                .list();

    }

    public List<HistoricIdentityLinkLog> getUserTasksByprocessId(String processId) {
        return historyService.createHistoricIdentityLinkLogQuery()
                .processDefinitionId(processId)
                .list();
    }


    public List<HistoricIdentityLinkLog> getUserTasksByAssignee(String assignee, int firstResult, int maxResult) {
        return historyService.createHistoricIdentityLinkLogQuery()
                .userId(assignee)
                .listPage(firstResult, maxResult);
    }

    //Inital User can set the Task as Requested
    public boolean userRequestAndCompleteTask(UserRequestModel model, String processId) {
        List<Task> tasks = getTasks(model.getJobId());
        boolean status = false;
        if (tasks.size() > 0) {
            for (Task item : tasks) {
                if (item.getProcessInstanceId().equals(processId) && item.getName().equals("User Start Request")) {
                    status = processTask(item.getId(), model.getUserId(), processId, "User", "Requested", item.getExecutionId(), null, null);
                }
            }
            return status;
        } else {
            return false;
        }
    }

    //get Current User set for the task
    public void startUserRequest(UserRequestModel model, final DelegateTask task) {
        task.setAssignee(model.getJobId());
    }

    //Find the head of section for the employee or immediate head
    public void findHeadOfSectionForEmployee(UserRequestModel model, final DelegateTask task) {
        List<ImmediateManager>  userdata = userProxyService.getEmployeeHeadOfSection(model.getJobId());
        taskActionByUser(model, userdata, task);
    }

    //Find the employee manager
    public void findEmployeeManager(UserRequestModel model, final DelegateTask task) {
        List<ImmediateManager> userdata = userProxyService.getEmployeeManager(model.getJobId());
        taskActionByUser(model, userdata, task);
    }


    //Find Assistant GM
    public void findAssistantGM(UserRequestModel model, final DelegateTask task) {
        List<ImmediateManager> userdata = userProxyService.getAssistantGeneralManager();
        taskActionByUser(model, userdata, task);
    }


    //Find the Training Head also add the training admin
    public void findHeadofTrainingAndContinousEducation(UserRequestModel model, final DelegateTask task) {
        List<ImmediateManager>  userdata = userProxyService.getHeadOfTrainingAndContinuingEducation();
        List<UserMaster> trainingAdmin = userSSOProxy.getUserByRole(new BigInteger("1"));
        if(trainingAdmin!=null && trainingAdmin.size()>0) {
            List<ImmediateManager> trainingAdminList = new ArrayList<>();
            trainingAdmin.forEach(item ->{
                ImmediateManager m = new ImmediateManager();
                m.setLegacyCode(item.getJobId());
                m.setImLegacyCode(item.getJobId());
                m.setTrainingAdmin(true);
                trainingAdminList.add(m);
            });
            if(userdata!=null){
                userdata.addAll(trainingAdminList)  ;
            }else{
                userdata = trainingAdminList;
            }
        }
        taskActionByUser(model, userdata, task);
        //return "Jijo-3";
    }


    //Find the Training Center Manager
    public void findManagerofTrainingAndContinousEducation(UserRequestModel model, final DelegateTask task) {
        //For single user based on Job family
        //        ResponseType userdata = userProxyService.getHeadOfTrainingCenterManager(workflowToken);
        //        taskActionByUser(model, userdata, task);
        //For multiple users based on Training SSO
        List<UserMaster> userdata = userSSOProxy.getUserByRole(new BigInteger("6"));
        taskActionByUserSSO(model, userdata, task);
    }

    //Find the Legal Head
    public void findLegalManager(UserRequestModel model, final DelegateTask task) {
        List<ImmediateManager> userdata = userProxyService.getLegalManager();
        taskActionByUser(model, userdata, task);
        //return "Jijo-3";
    }


    public Boolean getDelegationStatus(String userId) {
        try {
            Boolean userdata = userProxyService.checkTheUserIsAbsent(userId);
//            ObjectMapper mapper = new ObjectMapper();
//            Boolean status = mapper.convertValue(
//                    userdata.getData(),
//                    new TypeReference<Boolean>() {
//                    });
            return userdata;
        } catch (Exception e) {
            logger.error(e.toString());
            return false;
        }
    }


    public void taskActionByUserSSO(UserRequestModel model,  List<UserMaster> userdata, final DelegateTask task) {
        List<UserMaster> managers = userdata;
        if (managers != null && managers.size()>0) {
//            ObjectMapper mapper = new ObjectMapper();
//            managers = mapper.convertValue(
//                    userdata.getData(),
//                    new TypeReference<List<UserMasterModel>>() {
//                    });

            // Set fist as the main employee
            if (managers != null && managers.size() > 0) {
                task.setAssignee(managers.get(0).getJobId());
                task.setDescription(managers.get(0).getcNameAr());
                List<ImmediateManager>  delegations = userProxyService.getDelegationForEmployee(managers.get(0).getJobId());
               // List<ImmediateManager> otherUsers = null;
//                otherUsers = mapper.convertValue(
//                        delegations.getData(),
//                        new TypeReference<List<ImmediateManager>>() {
//                        });
                if (delegations != null && delegations.size() > 0) {
                    delegations.forEach(u -> {
                        task.addCandidateUser(u.getLegacyCode());
                    });
                }

                if (managers.size() > 1) {
                    for (UserMaster oUser : managers.subList(1, managers.size())) {
                        task.addCandidateUser(oUser.getJobId());
                    }

                }


            } else {
                requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
                trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
            }
        } else {
            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
            trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
        }
    }

    public void taskActionByUser(UserRequestModel model, List<ImmediateManager> userdata, final DelegateTask task) {
        try {
            Collection<String> delegationsJobId = new HashSet<>();
            ImmediateManager manager = null;
            if (userdata != null && userdata.size() > 0) {
                ObjectMapper mapper = new ObjectMapper();
                //TODO Get other chairman
                manager = userdata.get(0);
                if (manager.getLegacyCode() != null) {
                    logger.info("Task assigned to im manger ### " +  manager.getImLegacyCode());
                    task.setAssignee(manager.getImLegacyCode());
                    task.setDescription(manager.getImCnameAr());
                    if (getDelegationStatus(manager.getImLegacyCode())) {
                        List<ImmediateManager> delegations = userProxyService.getDelegationForEmployee(manager.getImLegacyCode());
//                    List<ImmediateManager> otherUsers = null;
//                    otherUsers = mapper.convertValue(
//                            delegations.getData(),
//                            new TypeReference<List<ImmediateManager>>() {
//                            });
                        if (delegations != null && delegations.size() > 0) {
                            delegations.forEach(item -> {
                                logger.info("Task assigned to delegations  " + item.getLegacyCode());
                                //task.addCandidateUser(item.getLegacyCode());
                                delegationsJobId.add(item.getLegacyCode());
                            });
                        }
                    }
                } else {
                    requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
                    trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
                }
                //Set special delegation to admin done
                if (userdata != null && userdata.size() > 0) {
                    userdata.forEach(item -> {
                        if (item.getTrainingAdmin()!=null && item.getTrainingAdmin()) {
                            logger.info("Task assigned to training admin " + item.getLegacyCode());
                           // task.addCandidateUser(item.getLegacyCode());
                            delegationsJobId.add(item.getLegacyCode());
                        }
                    });
                }

                if(delegationsJobId!=null && delegationsJobId.size()>0){
                    task.addCandidateUsers(delegationsJobId);
                }
            } else {
                requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
                trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
            }
        }catch (Exception e){
            e.printStackTrace();
            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.FAILED);
        }
    }

    public void checkTheUserIsHeadOfTraining(UserRequestModel model, DelegateExecution execution) {
        Boolean status = false;
        String errorCase = "";
        logger.info("checkTheUserIsHeadOfTraining" + model.getEmail());
        // ResponseType userdata = userProxyService.checkUserIsHeadOfTraining(model.getJobId(), workflowToken);
        Boolean userdata = userSSOProxy.checkUserIsHeadOfTraining(model.getJobId());
//        if (userdata != null && userdata.getData() != null && userdata.isStatus()) {
//            ObjectMapper mapper = new ObjectMapper();
//            status = mapper.convertValue(
//                    userdata.getData(),
//                    new TypeReference<Boolean>() {
//                    });
//            logger.info("checkTheUserIsHeadOfTraining" + userdata);
            if (status) {
                execution.setVariable("resultcheckval", "yes");
            } else {
                execution.setVariable("resultcheckval", "no");
            }
//        } else {
//            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
//            trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
//        }
    }


    public void checkTheUserIsManager(UserRequestModel model, DelegateExecution execution) {
        Boolean status = false;
        String errorCase = "";
        logger.info("checkUserIsManager" + model.getEmail());
        Boolean userdata = userProxyService.checkUserIsManager(model.getJobId(), model.getDepartmentId());
        if (userdata) {
            execution.setVariable("resultcheckval_manager", "yes");
        } else {
            execution.setVariable("resultcheckval_manager", "no");
        }
       // if (userdata) {
//            ObjectMapper mapper = new ObjectMapper();
//            status = mapper.convertValue(
//                    userdata.getData(),
//                    new TypeReference<Boolean>() {
//                    });
            logger.info("checkUserIsManager" + status.toString());

//        } else {
//            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
//            trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
//        }
    }


    public void rejectionAction(UserRequestModel model) {
        //TODO rejection based on the workflow
        logger.info("Rejected" + model.getEmail());
        String message = COURSE_REJECTED + model.getCourseName();
        requestService.saveOrUpdateWorkflow(model, WorkflowStatus.REJECTED);
        logger.info("Rejected ### ");
        publisher.sendNotification(createNotification(model, message));
        publisher.updateTrainingRequest(new TrainingRequestStatus(model.getTrainingRequestId(), WorkflowStatus.REJECTED));
        //notificationProxyService.sendNotification(createNotification(model, message), workflowToken);
        //trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.REJECTED, workflowToken);
    }

    public void acceptAction(UserRequestModel model) {
        //TODO accept based on workflow
        logger.info("Accepted" + model.getEmail());
        String message = COURSE_APPROVED + model.getCourseName();
        requestService.saveOrUpdateWorkflow(model, WorkflowStatus.APPROVED);
        //notificationProxyService.sendNotification(createNotification(model, message), workflowToken);
        //trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.APPROVED, workflowToken);
        publisher.sendNotification(createNotification(model, message));
        publisher.updateTrainingRequest(new TrainingRequestStatus(model.getTrainingRequestId(), WorkflowStatus.APPROVED));
    }

    NotificationModel createNotification(UserRequestModel model, String message) {
        NotificationModel notificationModel = new NotificationModel();
        notificationModel.setEmailBody(message);
        notificationModel.setSmsBody(message);
        notificationModel.setToAddress(model.getEmail());
        notificationModel.setEmailSubject(EMAIL_SUBJECT);
        notificationModel.setPhoneNumber(model.getMobile());
        if (model.getEmail() != null) {
            notificationModel.setIsEmail(1);
        } else {
            notificationModel.setIsEmail(0);
        }
        if (model.getMobile() != null) {
            notificationModel.setIsSMS(1);
        } else {
            notificationModel.setIsSMS(0);
        }
        return notificationModel;
    }


    public void findHeadOfSectionForEmployeeDelegation(UserRequestModel model, DelegateTask task) {
        logger.info("Error in request" + task.getAssignee());
        task.addCandidateUser("eman");
    }

    public String findHeadOfSectionForEmployeeCandidate(UserRequestModel model) {
        return "fatma-4";
    }

    public String checkRequestFromHeadOfSection(UserRequestModel model) {
        return "fatma-4";
    }

    public String findManagerForEmployee(UserRequestModel model) {
        return "Adel-1";
    }

    public String findManagerForEmployeeCandidate(UserRequestModel model) {
        return "Adel-2";
    }


    public void checkRequesterAndApprovalAreSame(UserRequestModel model) {
        logger.info("check for Approval" + model.getEmail());
    }

    public void notificationAndComment(UserRequestModel model) {
        logger.info(" Notification" + model.getEmail());
    }

    public void getImmediateheadOfUser(UserRequestModel model) {
        logger.info(" Immediate Head" + model.getEmail());
    }

    public void hedofTrainingApproval(UserRequestModel model) {
        logger.info(" Immediate Head" + model.getEmail());
    }


    public void processInput(UserRequestModel model) {
        logger.info("processinput" + model.getEmail());
    }
}
