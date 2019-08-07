package qa.gov.customs.workflowcamuda.service;


import org.camunda.bpm.engine.HistoryService;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.HistoricIdentityLinkLog;
import org.camunda.bpm.engine.history.HistoricTaskInstance;
import org.camunda.bpm.engine.history.UserOperationLogEntry;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.variable.value.ObjectValue;

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

    public void startProcess(UserRequestModel model) {
        model.setCreatedOn(new Date().toString());
        Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", model);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey(TYPE_1_PROCESS, vars);
        //TODO service for notification as PROCESS-STARTED
        System.out.println(">>>>>>>> " + processInstance.getId());
    }

    public List<Task> getTasks(String assignee) {
        return  taskService.createTaskQuery().taskAssignee(assignee).list();
    }

    public UserRequestModel getProcessDetails(String executionId) {
        UserRequestModel variables = (UserRequestModel) runtimeService.getVariable(executionId,"applicant");
        System.out.println(variables.getEmail());
        return variables;
    }


    @Transactional
    public boolean processTask(String taskId, String userId,String processId,String role,String action,String executionId) {
        try {
            runtimeService.setVariable(executionId, role, action);
//            taskService.setVariable(taskId,role,action);
//            Map variables = new HashMap<String, Object>();
//            variables.put(role, action);
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


    public String findHeadOfSectionForEmployee(UserRequestModel model){
        return "fatma-4";
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

    public String findHeadofTrainingAndContinousEducation(UserRequestModel model){
        return "Jijo-3";
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
