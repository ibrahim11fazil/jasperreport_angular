package qa.gov.customs.workflowcamuda.service;


import org.camunda.bpm.engine.HistoryService;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.UserOperationLogEntry;
import org.camunda.bpm.engine.runtime.Execution;
import org.camunda.bpm.engine.runtime.ProcessInstance;
import org.camunda.bpm.engine.task.Comment;
import org.camunda.bpm.engine.task.Task;
import org.camunda.bpm.engine.variable.VariableMap;
import org.camunda.bpm.engine.variable.Variables;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class HodService {

    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private HistoryService historyService;

    public void startProcess(UserRequestModel model) {
        Map<String, Object> vars = Collections.<String, Object>singletonMap("applicant", model);
        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("process_hod", vars);
        System.out.println(">>>>>>>> " + processInstance.getId());
    }


    public UserRequestModel getProcessDetails(String executionId) {
        UserRequestModel variables = (UserRequestModel) runtimeService.getVariable(executionId,"applicant");
        System.out.println(variables.getEmail());
        return variables;
    }

    public List<Task> getTasks(String assignee) {

        return  taskService.createTaskQuery().taskAssignee(assignee).list();
        // return taskService.createTaskQuery().taskAssignee(assignee).list();
        // return taskService.get
       // taskService.createTaskQuery().taskAssignee(assignee).list().forEach(item -> {});
    }

    @Transactional
    public boolean processTask(String taskId, String userId,String processId,String role,String action,String executionId) {
        try {
//            Map variables = new HashMap<String, Object>();
//            variables.put(role, action);
//
//            VariableMap variables1 =
//                    Variables.createVariables()
//                            .putValueTyped("string", Variables.stringValue(action));
//            Map<String, Object> vars = Collections.<String, Object>singletonMap("manger", action);
            //runtimeService.setVariables(executionId,  vars);
            runtimeService.setVariable(executionId, role, action);
            //taskService.setVariable(taskId,role,action);
            //runtimeService.setVariable();
            //execution.setVariable('sum', sum)
           // runtimeService.setVariablesLocal(executionId, variables);
            //runtimeService.setVariable(processId,"manger","action");

            //ProcessInstance newProcessInstance = runtimeService.createProcessInstanceQuery().superProcessInstanceId(processId).singleResult();
            //runtimeService.setVariable(executionId, "applicant.manageract ", action);



            taskService.complete(taskId,  null);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return  false;
        }

    }



    public List<UserOperationLogEntry> getHistoryOfProcess(String processInsranceId){
      return  historyService.createUserOperationLogQuery().processInstanceId(processInsranceId).list();
    }

    public void getHistory(String assignee){

        historyService.createHistoricTaskInstanceQuery()
                .finished()
                .taskAssignee(assignee)
                .listPage(0, 10).forEach(item->{
            System.out.println("assingee " + item.getAssignee());
            System.out.println("getProcessInstanceId " + item.getProcessInstanceId());  /// process Id user need to store
            System.out.println("taskDefinition key " + item.getTaskDefinitionKey());
            System.out.println("getName  " + item.getName()); //Action Name
            System.out.println("parent task id  " + item.getParentTaskId());
            System.out.println("parent getDescription " + item.getDescription());
            // item.getExecutionId()
            System.out.println("parent getExecutionId " + item.getExecutionId());
            //item.get

            //System.out.println("parent task id  " + item());
            //TODO  IF TASK ID IS HERE THEN ITS BETTER ,

            System.out.println("getProcessDefinitionKey  " + item.getProcessDefinitionKey());
            System.out.println("getProcessDefinitionId " + item.getProcessDefinitionId());

            // Getting tasks based on process
            historyService.createHistoricDetailQuery()
                    .variableUpdates()
                    .processInstanceId(item.getProcessInstanceId())
                    .orderByVariableName().asc()
                    .list().forEach( item1 -> {

                System.out.println("task Id > " + item1.getId() + " " + item1.getTaskId() );
                System.out.println("getProcessDefinitionId  " + item1.getProcessDefinitionId());

            });


            historyService.createUserOperationLogQuery()
                    .processDefinitionId(item.getProcessDefinitionId())

                    .list().forEach(item2 -> {

                System.out.println("task Id >>> " + item2.getTaskId() + " " + item2.getNewValue() );
                System.out.println("task Id1 >>> " + item2.getTaskId() + " " + item2.getNewValue() );

            });



        });









    }


    public List<HistoricDetail> getUserTaskByProcessId(String processId){

      //return  historyService.createUserOperationLogQuery().processDefinitionId(processId).list();
       return historyService.createHistoricDetailQuery()
                .variableUpdates()
                .processInstanceId(processId)
                .orderByVariableName().asc()
                .list();

    }







}
