package qa.gov.customs.workflowcamuda.service;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.camunda.bpm.engine.HistoryService;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.delegate.DelegateTask;
import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.HistoricIdentityLinkLog;
import org.camunda.bpm.engine.history.HistoricTaskInstance;
import org.camunda.bpm.engine.history.UserOperationLogEntry;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Task;
import org.camunda.bpm.model.bpmn.instance.UserTask;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.ImmediateManager;
import qa.gov.customs.workflowcamuda.model.ResponseType;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.variable.value.ObjectValue;
import qa.gov.customs.workflowcamuda.proxy.EmpModel;
import qa.gov.customs.workflowcamuda.proxy.UserProxyService;

import javax.transaction.Transactional;
import java.util.*;

import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.TYPE_1_PROCESS;

@Component
@Qualifier("workflowEmp01")
public class WorkflowEmp01 {

    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private TaskService taskService;


    @Autowired
    private HistoryService historyService;


    @Value("${workflowtoken}")
    private String workflowToken;




    private final UserProxyService userProxyService;
    @Autowired
    public WorkflowEmp01( UserProxyService userProxyService) {
        this.userProxyService=userProxyService;
    }


    //Initial process for all requests
    public boolean startProcess(UserRequestModel model,String token) {
        model.setCreatedOn(new Date().toString());
        Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", model);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(TYPE_1_PROCESS, vars);
        System.out.println(">>>>>>>> " + processInstance.getId());
        return userRequestAndCompleteTask(model,processInstance.getId());
    }

    public List<Task> getTasks(String assignee) {
        return  taskService.createTaskQuery().taskAssignee(assignee).list();
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
        UserRequestModel variables = (UserRequestModel) runtimeService.getVariable(executionId,"applicant");
        System.out.println(variables.getEmail());
        return variables;
    }

    @Transactional
    public boolean processTask(String taskId, String userId,String processId,String role,String action,String executionId,String processInstanceId,String messge) {
        try {
            runtimeService.setVariable(executionId , role , action);
            if(messge!=null && processInstanceId!=null)
            taskService.createComment(taskId,processInstanceId,messge);
            taskService.complete(taskId, null );
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return  false;
        }

    }

    public List<HistoricDetail> getUserTaskByProcessId(String processId){
        return historyService.createHistoricDetailQuery()
                .variableUpdates()
                .processInstanceId(processId)
                .orderByVariableName().asc()
                .list();

    }

    public List<HistoricDetail> getUserTaskByExecutionIdId(String executionId){
        return historyService.createHistoricDetailQuery()
                .variableUpdates()
                .executionId(executionId)
                .orderByVariableName().asc()
                .list();

    }

    //Task listing
    public List<HistoricTaskInstance> getUserTaskByTaskIdId(String executionId){
        return historyService.createHistoricTaskInstanceQuery()
                .executionId(executionId)
                .list();

    }

    public List<HistoricIdentityLinkLog> getUserTasksByprocessId(String processId){
       return historyService.createHistoricIdentityLinkLogQuery()
                 .processDefinitionId(processId)
                 .list();
    }

    public void error(UserRequestModel model){
        System.out.println("Error in request" + model.getEmail());
    }

    public void error1(UserRequestModel model,String value ){
        System.out.println("Error in request" + model.getEmail());
        System.out.println("Error in value" + value);
    }


    //Inital User can set the Task as Requested
    public boolean userRequestAndCompleteTask(UserRequestModel model,String processId){
         List<Task> tasks =   getTasks(model.getJobId());
         boolean status= false;
           if(tasks.size()>0) {
               for (Task item:tasks) {
                   if (item.getProcessInstanceId().equals(processId) && item.getName().equals("User Start Request")) {
                       status = processTask(item.getId(), model.getUserId(), processId, "User", "Requested", item.getExecutionId(),null,null);
                   }
               }
               return status;
           }else{
               return false;
           }
    }

    //get Current User set for the task
    public String startUserRequest(UserRequestModel model){
        return model.getJobId();
    }

    //Find the head of section for the employee or immediate head
    public void findHeadOfSectionForEmployee(UserRequestModel model,final DelegateTask task){
      ResponseType userdata=  userProxyService.getEmployeeHead(model.getJobId(),workflowToken);
      taskActionByUser(userdata,task);

//        UserTask userTask = task.getBpmnModelElementInstance();
//        List<String> candidateUsers = new ArrayList<String>();
//        candidateUsers.add("eman-1");
//        candidateUsers.add("eman-2");
//        System.out.println("Error in request" + task.getAssignee());
//        task.setAssignee("fatma-6");
//        task.addCandidateUsers(candidateUsers);
//        task.addCandidateUser("eman-3");
//        task.addCandidateGroup("itdev");
//
//
    }

    //Find the Training Head
    public void findHeadofTrainingAndContinousEducation(UserRequestModel model,final DelegateTask task){
        ResponseType userdata=  userProxyService.getTrainingDepartmentHead(workflowToken);
        taskActionByUser(userdata,task);
        //return "Jijo-3";
    }

    public void taskActionByUser(ResponseType userdata,final DelegateTask task){
        ImmediateManager  manager =null;
        if(userdata!=null && userdata.getData()!=null && userdata.isStatus()) {
            ObjectMapper mapper = new ObjectMapper();
            manager = mapper.convertValue(
                    userdata.getData(),
                    new TypeReference<ImmediateManager>() {
                    });
            if(manager!=null && manager.getLegacyCode()!=null){
                List<String> candidateUsers = new ArrayList<String>();
                task.setAssignee(manager.getLegacyCode());
                if(manager.getDelegations()!=null && manager.getDelegations().size()>0){
                    manager.getDelegations().forEach(item -> {
                        task.addCandidateUser(item.getLegacyCode());
                    });
                }
            }else{
                //TODO cancel Task Report to server
            }
        }else{
            //TODO cancel Task Report to server
        }
    }


    public void findHeadOfSectionForEmployeeDelegation(UserRequestModel model, DelegateTask task){
        System.out.println("Error in request" + task.getAssignee());
        task.addCandidateUser("eman");
    }

    public String findHeadOfSectionForEmployeeCandidate(UserRequestModel model){
        return "fatma-4";
    }

    public String checkRequestFromHeadOfSection(UserRequestModel model){
        return "fatma-4";
    }

    public String findManagerForEmployee(UserRequestModel model){
        return "Adel-1";
    }
    public String findManagerForEmployeeCandidate(UserRequestModel model){
        return "Adel-2";
    }



    public void rejectionAction(UserRequestModel model){
        System.out.println("Rejected" + model.getEmail());
    }

    public void acceptAction(UserRequestModel model){
        System.out.println("Accepted" + model.getEmail());
    }

    public void checkRequesterAndApprovalAreSame(UserRequestModel model){
        System.out.println("check for Approval" + model.getEmail());
    }

    public void notificationAndComment(UserRequestModel model){
        System.out.println(" Notification" + model.getEmail());
    }

    public void getImmediateheadOfUser(UserRequestModel model){
        System.out.println(" Immediate Head" + model.getEmail());
    }

    public void hedofTrainingApproval(UserRequestModel model){
        System.out.println(" Immediate Head" + model.getEmail());
    }


    public void checkTheUserIsHeadOfTraining(UserRequestModel model,DelegateExecution execution){

        System.out.println("checkTheUserIsHeadOfTraining" + model.getEmail());
       // String data= (String)execution.getVariable("resultcheck");
       // execution.setVariable("resultcheckval","yes" );

        execution.setVariable("resultcheckval","no" );

       // return "yes";

    }

    public void processInput(UserRequestModel model){
        System.out.println("processinput" + model.getEmail());
    }
}
