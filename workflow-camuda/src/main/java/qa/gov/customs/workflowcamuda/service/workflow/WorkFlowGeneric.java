package qa.gov.customs.workflowcamuda.service.workflow;


import org.camunda.bpm.engine.HistoryService;
import org.camunda.bpm.engine.RuntimeService;
import org.camunda.bpm.engine.TaskService;
import org.camunda.bpm.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

import javax.transaction.Transactional;
import java.util.List;

@Component
@Qualifier("workFlowGeneric")
public class WorkFlowGeneric {
    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private HistoryService historyService;

    @Value("${workflowtoken}")
    private String workflowToken;


    public List<Task> getTasks(String assignee) {
        return  taskService.createTaskQuery().taskAssignee(assignee).list();
    }

    public List<Task> getCandidateTasks(String delegations) {
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
}
