package qa.gov.customs.workflowcamuda.controller;


import org.apache.catalina.User;
import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.UserOperationLogEntry;
import org.camunda.bpm.engine.task.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;
import qa.gov.customs.workflowcamuda.model.UserTaskModel;
import qa.gov.customs.workflowcamuda.service.DemoService;
import qa.gov.customs.workflowcamuda.service.HodService;
import java.util.ArrayList;
import java.util.List;

@RestController
public class HodController {

    @Autowired
    private HodService myService;

    @RequestMapping(value="/processhod", method= RequestMethod.POST)
    public void startProcessInstance(@RequestBody UserRequestModel model) {
        myService.startProcess(model);
    }






    @RequestMapping(value="/tasksHod", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<TaskRepresentation> getTasks(@RequestParam String assignee) {
        List<Task> tasks = myService.getTasks(assignee);
        List<TaskRepresentation> dtos = new ArrayList<TaskRepresentation>();
        for (Task task : tasks) {
            //task.getExecutionId();
            TaskRepresentation taskRepresentation=   new HodController.TaskRepresentation(
                    task.getId(),
                    task.getName(),
                    task.getProcessInstanceId(),
                    task.getExecutionId());
            taskRepresentation.setUserRequestModel(myService.getProcessDetails( task.getExecutionId()));
            dtos.add(taskRepresentation);
        }
        return dtos;
    }

    @RequestMapping(value="/executeTaskHod", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public UserTaskModel getTasks(@RequestBody UserTaskModel assignee) {
        boolean tasks = myService.processTask(
                assignee.getTaskId(),
                assignee.getAssigne(),
                assignee.getProcessId(),
                assignee.getRole(),
                assignee.getAction(),assignee.getExecutionId());
        assignee.setStatus(tasks);
        return assignee;
    }


    @RequestMapping(value="/historyHod", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricDetail> getHistoryByProcessId(@RequestBody UserTaskModel assignee) {
        return myService.getUserTaskByProcessId(assignee.getProcessId());
        //return assignee;
    }


    static class TaskRepresentation {

        private String id;
        private String name;
        private String processId;
        private String executionId;
        private UserRequestModel userRequestModel;

        public TaskRepresentation(String id, String name,String processInstanceid,String executionId) {
            this.id = id;
            this.name = name;
            this.processId=processInstanceid;
            this.executionId=executionId;
        }

        public String getId() {
            return id;
        }
        public void setId(String id) {
            this.id = id;
        }
        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }

        public String getProcessId() {
            return processId;
        }

        public void setProcessId(String processId) {
            this.processId = processId;
        }

        public String getExecutionId() {
            return executionId;
        }

        public void setExecutionId(String executionId) {
            this.executionId = executionId;
        }

        public UserRequestModel getUserRequestModel() {
            return userRequestModel;
        }

        public void setUserRequestModel(UserRequestModel userRequestModel) {
            this.userRequestModel = userRequestModel;
        }
    }
}
