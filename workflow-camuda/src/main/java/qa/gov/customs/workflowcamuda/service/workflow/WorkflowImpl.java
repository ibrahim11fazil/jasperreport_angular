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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.config.Publisher;

import qa.gov.customs.workflowcamuda.model.*;
import qa.gov.customs.workflowcamuda.proxy.NotificationProxyService;
import qa.gov.customs.workflowcamuda.proxy.TrainingProxyService;
import qa.gov.customs.workflowcamuda.proxy.EmployeeProxyService;
import qa.gov.customs.workflowcamuda.proxy.UserSSOProxy;
import qa.gov.customs.workflowcamuda.service.RequestService;
import qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants;
import qa.gov.customs.workflowcamuda.utils.WorkflowStatus;

import javax.transaction.Transactional;
import java.util.*;

import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.*;


@Component
@Qualifier("workflowImpl")
public class WorkflowImpl {

    private final EmployeeProxyService userProxyService;
    private final UserSSOProxy userSSOProxy;
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




    private static final Logger logger = LoggerFactory.getLogger(WorkflowImpl.class);

    @Autowired
    public WorkflowImpl(EmployeeProxyService userProxyService,
                        NotificationProxyService notificationProxyService,
                        TrainingProxyService trainingProxyService,
                        UserSSOProxy userSSOProxy) {
        this.userProxyService = userProxyService;
        this.notificationProxyService = notificationProxyService;
        this.trainingProxyService = trainingProxyService;
        this.userSSOProxy=userSSOProxy;
    }


    //Initial process for all requests
    public boolean startProcessWFType1(UserRequestModel model,String type) {
        try {
            model.setCreatedOn(new Date().toString());
            Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", model);
            ProcessInstance processInstance = null;
            ProcessEngine processEngine = ProcessEngines.getDefaultProcessEngine();
            if (type.equals(WorkFlowRequestConstants.TYPE_1_EMPLOYEE_REQUEST)) {

            ProcessDefinition pd = processEngine.getRepositoryService().createProcessDefinitionQuery()
                    .processDefinitionKey(TYPE_1_PROCESS)
                    .latestVersion() //now 46
                    //.processDefinitionVersion(46) // This version is available in DB when changing the process diagram
                    .versionTag(TYPE_1_PROCESS_VERSION) // This should be changed for new versions
                    .singleResult();
                processInstance = processEngine.getRuntimeService().startProcessInstanceById(pd.getId(),vars);

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
                processInstance = processEngine.getRuntimeService().startProcessInstanceById(TYPE_2_PROCESS,vars);
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
        }catch (Exception e ){
            e.printStackTrace();
            return false;
        }

    }

    public List<Task> getTasks(String assignee) {
        return taskService.createTaskQuery().taskAssignee(assignee).list();
    }

    public List<Task> getTasksPagenated(String assignee,int firstResult,int maxResult) {
        return taskService.createTaskQuery().taskAssignee(assignee).listPage(firstResult,maxResult);
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

    public List<Task> getCandidateTasksPagenated(String delegations,int firstResult,int maxResult) {
        //return  taskService.createTaskQuery().taskCandidateUser(delegations).list();
        return taskService.createTaskQuery()
                .or()
                .taskAssignee(delegations)
                .taskCandidateUser(delegations)
                .includeAssignedTasks()
                .endOr()
                .listPage(firstResult,maxResult);
    }

    public UserRequestModel getProcessDetails(String executionId) {
        try {
            UserRequestModel variables = (UserRequestModel) runtimeService.getVariable(executionId, "applicant");
            logger.info(variables.getEmail());
            return variables;
        }catch (Exception e)
        {
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
            logger.info("Task ### "+taskId );
            taskService.complete(taskId, null);
            return true;
        } catch (Exception e) {
            logger.error(e.toString());
            //TODO log error
            return false;
        }

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


    public Comment saveComment(String taskId,String processInstanceId, String message){
        return taskService.createComment(taskId,processInstanceId,message);
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


    public List<HistoricIdentityLinkLog> getUserTasksByAssignee(String assignee,int firstResult,int maxResult) {
        return historyService.createHistoricIdentityLinkLogQuery()
                .userId(assignee)
                .listPage(firstResult,maxResult);
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
        ResponseType userdata = userProxyService.getEmployeeHead(model.getJobId(), workflowToken);
        taskActionByUser(model, userdata, task);
    }

    //Find the employee manager
    public void findEmployeeManager(UserRequestModel model, final DelegateTask task) {
        ResponseType userdata = userProxyService.getEmployeeManager(model.getJobId(), workflowToken);
        taskActionByUser(model, userdata, task);
    }


    //Find Assistant GM
    public void findAssistantGM(UserRequestModel model, final DelegateTask task) {
        ResponseType userdata = userProxyService.getAssistantGeneralManager(workflowToken);
        taskActionByUser(model, userdata, task);
    }


    //Find the Training Head
    public void findHeadofTrainingAndContinousEducation(UserRequestModel model, final DelegateTask task) {
        ResponseType userdata = userProxyService.getTrainingDepartmentHead(workflowToken);
        taskActionByUser(model, userdata, task);
        //return "Jijo-3";
    }


    //Find the Training Center Manager
    public void findManagerofTrainingAndContinousEducation(UserRequestModel model, final DelegateTask task) {
        //For single user based on Job family
        //        ResponseType userdata = userProxyService.getHeadOfTrainingCenterManager(workflowToken);
        //        taskActionByUser(model, userdata, task);
        //For multiple users based on Training SSO
        ResponseType userdata = userSSOProxy.getTrainingDepartmentHeads(workflowToken);
        taskActionByUserSSO(model, userdata, task);
    }

    //Find the Legal Head
    public void findLegalManager(UserRequestModel model, final DelegateTask task) {
        ResponseType userdata = userProxyService.getLegalManager(workflowToken);
        taskActionByUser(model, userdata, task);
        //return "Jijo-3";
    }


    public Boolean getDelegationStatus(String userId){
        try {
            ResponseType userdata = userProxyService.checkTheUserIsAbsent(userId, workflowToken);
            ObjectMapper mapper = new ObjectMapper();
            Boolean status = mapper.convertValue(
                    userdata.getData(),
                    new TypeReference<Boolean>() {
                    });
            return status;
        }catch (Exception e){
            logger.error(e.toString());
            return false;
        }
    }


    public void taskActionByUserSSO(UserRequestModel model, ResponseType userdata, final DelegateTask task) {
        List<UserMasterModel> managers = null;
        if (userdata != null && userdata.getData() != null && userdata.isStatus()) {
            ObjectMapper mapper = new ObjectMapper();
            managers = mapper.convertValue(
                    userdata.getData(),
                    new TypeReference<List<UserMasterModel>>() {
                    });

            // Set fist as the main employee
            if(managers!=null && managers.size()>0){
                    task.setAssignee(managers.get(0).getJobId());
                    task.setDescription(managers.get(0).getcNameAr());
                    ResponseType delegations=   userProxyService.getDelegationForEmployee(managers.get(0).getJobId(),workflowToken);
                    List<ImmediateManager> otherUsers = null;
                    otherUsers = mapper.convertValue(
                            delegations.getData(),
                            new TypeReference<List<ImmediateManager>>() {
                            });
                    if (otherUsers != null && otherUsers.size() > 0) {
                        otherUsers.forEach(u -> {
                            task.addCandidateUser(u.getLegacyCode());
                        });
                    }

                    if(managers.size()>1){
                        for (UserMasterModel oUser:managers.subList(1,managers.size())) {
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

    public void taskActionByUser(UserRequestModel model, ResponseType userdata, final DelegateTask task) {
        ImmediateManager manager = null;
        if (userdata != null && userdata.getData() != null && userdata.isStatus()) {
            ObjectMapper mapper = new ObjectMapper();
            manager = mapper.convertValue(
                    userdata.getData(),
                    new TypeReference<ImmediateManager>() {
                    });
            if (manager != null && manager.getLegacyCode() != null) {
                task.setAssignee(manager.getImLegacyCode());
                task.setDescription(manager.getImCnameAr());
                if(getDelegationStatus(manager.getImLegacyCode())) {
                  ResponseType delegations=   userProxyService.getDelegationForEmployee(manager.getImLegacyCode(),workflowToken);
                    List<ImmediateManager> otherUsers = null;
                    otherUsers = mapper.convertValue(
                            delegations.getData(),
                            new TypeReference<List<ImmediateManager>>() {
                            });
                    if (otherUsers != null && otherUsers.size() > 0) {
                        otherUsers.forEach(item -> {
                            task.addCandidateUser(item.getLegacyCode());
                        });
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

    public void checkTheUserIsHeadOfTraining(UserRequestModel model, DelegateExecution execution) {
        Boolean status = false;
        String errorCase = "";
        System.out.println("checkTheUserIsHeadOfTraining" + model.getEmail());
       // ResponseType userdata = userProxyService.checkUserIsHeadOfTraining(model.getJobId(), workflowToken);
        ResponseType userdata = userSSOProxy.checkUserIsHeadOfTraining(model.getJobId(), workflowToken);
        if (userdata != null && userdata.getData() != null && userdata.isStatus()) {
            ObjectMapper mapper = new ObjectMapper();
            status = mapper.convertValue(
                    userdata.getData(),
                    new TypeReference<Boolean>() {
                    });
            logger.info("checkTheUserIsHeadOfTraining" + status.toString() );
            if (status) {
                execution.setVariable("resultcheckval", "yes");
            } else {
                execution.setVariable("resultcheckval", "no");
            }
        } else {
            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
            trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
        }
    }


    public void checkTheUserIsManager(UserRequestModel model, DelegateExecution execution) {
        Boolean status = false;
        String errorCase = "";
        System.out.println("checkUserIsManager" + model.getEmail());
        ResponseType userdata = userProxyService.checkUserIsManager(model.getJobId(),model.getDepartmentId(), workflowToken);
        if (userdata != null && userdata.getData() != null && userdata.isStatus()) {
            ObjectMapper mapper = new ObjectMapper();
            status = mapper.convertValue(
                    userdata.getData(),
                    new TypeReference<Boolean>() {
                    });
            logger.info("checkUserIsManager" + status.toString() );
            if (status) {
                execution.setVariable("resultcheckval_manager", "yes");
            } else {
                execution.setVariable("resultcheckval_manager", "no");
            }
        } else {
            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.ERROR);
            trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.ERROR, workflowToken);
        }
    }


    public void rejectionAction(UserRequestModel model) {
        //TODO rejection based on the workflow
        System.out.println("Rejected" + model.getEmail());
        String message = "Request rejected for course " + model.getCourseName();
        requestService.saveOrUpdateWorkflow(model, WorkflowStatus.REJECTED);
        logger.info("Rejected ### ");
        publisher.sendNotification(createNotification(model, message));
        publisher.updateTrainingRequest(new TrainingRequestStatus(model.getTrainingRequestId(),WorkflowStatus.REJECTED));
        //notificationProxyService.sendNotification(createNotification(model, message), workflowToken);
        //trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.REJECTED, workflowToken);
    }

    public void acceptAction(UserRequestModel model) {
        //TODO accept based on workflow
        System.out.println("Accepted" + model.getEmail());
        String message = "Request accepted for course " + model.getCourseName();
        requestService.saveOrUpdateWorkflow(model, WorkflowStatus.APPROVED);
        //notificationProxyService.sendNotification(createNotification(model, message), workflowToken);
        //trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.APPROVED, workflowToken);
        publisher.sendNotification(createNotification(model, message));
        publisher.updateTrainingRequest(new TrainingRequestStatus(model.getTrainingRequestId(),WorkflowStatus.APPROVED));
    }

    NotificationModel createNotification(UserRequestModel model, String message) {
        NotificationModel notificationModel = new NotificationModel();
        notificationModel.setEmailBody(message);
        notificationModel.setSmsBody(message);
        notificationModel.setToAddress(model.getEmail());
        notificationModel.setEmailSubject("Customs Notification");
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
        System.out.println("Error in request" + task.getAssignee());
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
        System.out.println("check for Approval" + model.getEmail());
    }

    public void notificationAndComment(UserRequestModel model) {
        System.out.println(" Notification" + model.getEmail());
    }

    public void getImmediateheadOfUser(UserRequestModel model) {
        System.out.println(" Immediate Head" + model.getEmail());
    }

    public void hedofTrainingApproval(UserRequestModel model) {
        System.out.println(" Immediate Head" + model.getEmail());
    }


    public void processInput(UserRequestModel model) {
        System.out.println("processinput" + model.getEmail());
    }
}
