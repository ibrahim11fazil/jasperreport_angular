package qa.gov.customs.workflowcamuda.service.workflow;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.netflix.discovery.converters.Auto;
import org.camunda.bpm.engine.HistoryService;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.DelegateTask;
import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.HistoricIdentityLinkLog;
import org.camunda.bpm.engine.history.HistoricTaskInstance;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.config.Publisher;
import qa.gov.customs.workflowcamuda.controller.WorkFlowController;
import qa.gov.customs.workflowcamuda.model.*;
import qa.gov.customs.workflowcamuda.proxy.NotificationProxyService;
import qa.gov.customs.workflowcamuda.proxy.TrainingProxyService;
import qa.gov.customs.workflowcamuda.proxy.UserProxyService;
import qa.gov.customs.workflowcamuda.service.RequestService;
import qa.gov.customs.workflowcamuda.utils.WorkflowStatus;

import javax.transaction.Transactional;
import java.util.*;

import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.TYPE_1_PROCESS;

@Component
@Qualifier("workflowEmp01")
public class WorkflowEmp01 {

    private final UserProxyService userProxyService;
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


    private static final Logger logger = LoggerFactory.getLogger(WorkflowEmp01.class);

    @Autowired
    public WorkflowEmp01(UserProxyService userProxyService,
                         NotificationProxyService notificationProxyService,
                         TrainingProxyService trainingProxyService) {
        this.userProxyService = userProxyService;
        this.notificationProxyService = notificationProxyService;
        this.trainingProxyService = trainingProxyService;
    }


    //Initial process for all requests
    public boolean startProcess(UserRequestModel model) {
        model.setCreatedOn(new Date().toString());
        Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", model);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(TYPE_1_PROCESS, vars);
        System.out.println(">>>>>>>> " + processInstance.getId());
        boolean status = userRequestAndCompleteTask(model, processInstance.getId());
        if (status)
            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.CREATED);
        else
            requestService.saveOrUpdateWorkflow(model, WorkflowStatus.FAILED);
        return status;
    }

    public List<Task> getTasks(String assignee) {
        return taskService.createTaskQuery().taskAssignee(assignee).list();
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

    public UserRequestModel getProcessDetails(String executionId) {
        UserRequestModel variables = (UserRequestModel) runtimeService.getVariable(executionId, "applicant");
        System.out.println(variables.getEmail());
        return variables;
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
            e.printStackTrace();
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

    //Find the Training Head
    public void findHeadofTrainingAndContinousEducation(UserRequestModel model, final DelegateTask task) {
        ResponseType userdata = userProxyService.getTrainingDepartmentHead(workflowToken);
        taskActionByUser(model, userdata, task);
        //return "Jijo-3";
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
                List<String> candidateUsers = new ArrayList<String>();
                task.setAssignee(manager.getImLegacyCode());
                task.setDescription(manager.getImCnameAr());
                if (manager.getDelegations() != null && manager.getDelegations().size() > 0) {
                    manager.getDelegations().forEach(item -> {
                        task.addCandidateUser(item.getLegacyCode());
                    });
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
        ResponseType userdata = userProxyService.checkUserIsHeadOfTraining(model.getJobId(), workflowToken);
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


    public void rejectionAction(UserRequestModel model) {
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
        System.out.println("Accepted" + model.getEmail());
        String message = "Request accepted for course " + model.getCourseName();
        notificationProxyService.sendNotification(createNotification(model, message), workflowToken);
        requestService.saveOrUpdateWorkflow(model, WorkflowStatus.APPROVED);
        trainingProxyService.updateWorkFlow(model.getTrainingRequestId(), WorkflowStatus.APPROVED, workflowToken);
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
