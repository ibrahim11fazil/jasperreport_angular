package qa.gov.customs.workflowcamuda.service;


import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.TYPE_1_PROCESS;

@Component
@Qualifier("workflowEmp01")
public class WorkflowEmp01 {

    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private TaskService taskService;

    public void startProcess(UserRequestModel model) {
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

    public String findHeadOfSectionForEmployee(UserRequestModel model){
        return "fatma-2";
    }

    public String findHeadOfSectionForEmployeeCandidate(UserRequestModel model){
        return "fatma-3";
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


    public int checkTheUserIsHeadOfTraining(UserRequestModel model){
        System.out.println("checkTheUserIsHeadOfTraining" + model.getEmail());
        return 1;
    }

    public void processInput(UserRequestModel model){
        System.out.println("processinput" + model.getEmail());
    }
}
