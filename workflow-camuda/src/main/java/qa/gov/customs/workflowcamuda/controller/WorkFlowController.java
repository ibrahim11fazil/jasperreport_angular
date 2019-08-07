package qa.gov.customs.workflowcamuda.controller;

import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.HistoricIdentityLinkLog;
import org.camunda.bpm.engine.history.HistoricTaskInstance;
import org.camunda.bpm.engine.history.UserOperationLogEntry;
import org.camunda.bpm.engine.task.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;
import qa.gov.customs.workflowcamuda.model.UserTaskModel;
import qa.gov.customs.workflowcamuda.service.WorkflowEmp01;

import java.util.ArrayList;
import java.util.List;

import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.TYPE_1_EMPLOYEE_REQUEST;
import static qa.gov.customs.workflowcamuda.utils.WorkFlowRequestConstants.TYPE_2_COURSE_SUGGESTION_BY_HEAD_OF_SESION;

@RestController
public class WorkFlowController {

    private static final Logger logger = LoggerFactory.getLogger(WorkFlowController.class);

    @Autowired
    private WorkflowEmp01 workflowServiceEmp;


    //Permission All User have the permission to create a request
    @RequestMapping(value="/workflow-start-request", method= RequestMethod.POST)
    public void startProcessInstance(@RequestBody UserRequestModel request) {
        if(request!=null && request.getWorkflowType()!=null){
            switch (request.getWorkflowType()){
                case TYPE_1_EMPLOYEE_REQUEST:
                    workflowServiceEmp.startProcess(request);
                    break;
                case TYPE_2_COURSE_SUGGESTION_BY_HEAD_OF_SESION:

                    break;

                default:
                    logger.info("no action created");
            }

           // myService.startProcess(model);
        }else{
            //return "invalid";
        }

    }

    @RequestMapping(value="/my-tasks", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<TaskRepresentation> getTasks(@RequestParam String assignee) {
        List<Task> tasks = workflowServiceEmp.getTasks(assignee);
        List<TaskRepresentation> dtos = new ArrayList<TaskRepresentation>();
        for (Task task : tasks) {
            TaskRepresentation taskRepresentation=   new TaskRepresentation(
                    task.getId(),
                    task.getName(),
                    task.getProcessInstanceId(),
                    task.getExecutionId());
            taskRepresentation.setUserRequestModel(workflowServiceEmp.getProcessDetails( task.getExecutionId()));
            dtos.add(taskRepresentation);
        }
        return dtos;
    }


    @RequestMapping(value="/execute-task", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public UserTaskModel getTasks(@RequestBody UserTaskModel assignee) {
        boolean tasks = workflowServiceEmp.processTask(
                assignee.getTaskId(),
                assignee.getAssigne(),
                assignee.getProcessId(),
                assignee.getRole(),
                assignee.getAction(),assignee.getExecutionId());
        assignee.setStatus(tasks);
        return assignee;
    }

   // TODO: Note-Get the history based on processId
    @RequestMapping(value="/process-history", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricDetail> getHistoryByProcessId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTaskByProcessId(assignee.getProcessId());
        //return assignee;
    }

    @RequestMapping(value="/process-history-execution-details", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricDetail> getHistoryByExecutionId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTaskByExecutionIdId(assignee.getExecutionId());
        //return assignee;
    }

    //TODO: Note-Get the task based on execution Id, This is important
    @RequestMapping(value="/process-history-task-details", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricTaskInstance> getHistoryByTaskId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTaskByTaskIdId(assignee.getExecutionId());
        //return assignee;
    }

    //Get the user task details based on processId
    @RequestMapping(value="/process-user-tasks-process-id", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricIdentityLinkLog> getHistoryUserTaskByProcessId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTasksByprocessId(assignee.getProcessId());
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
