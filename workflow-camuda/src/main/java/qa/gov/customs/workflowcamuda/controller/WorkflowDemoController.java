package qa.gov.customs.workflowcamuda.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.camunda.bpm.engine.history.HistoricDetail;
import org.camunda.bpm.engine.history.HistoricIdentityLinkLog;
import org.camunda.bpm.engine.history.HistoricTaskInstance;
import org.camunda.bpm.engine.task.Comment;
import org.camunda.bpm.engine.task.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.workflowcamuda.model.ResponseType;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;
import qa.gov.customs.workflowcamuda.model.UserTaskModel;
import qa.gov.customs.workflowcamuda.proxy.EmpModel;
import qa.gov.customs.workflowcamuda.proxy.EmployeeProxyService;
import qa.gov.customs.workflowcamuda.security.CustomPrincipal;
import qa.gov.customs.workflowcamuda.service.workflow.WorkflowImpl;
import qa.gov.customs.workflowcamuda.utils.Constants;
import qa.gov.customs.workflowcamuda.utils.MessageUtil;

import java.util.ArrayList;
import java.util.List;


@RestController
public class WorkflowDemoController {

    private static final Logger logger = LoggerFactory.getLogger(WorkFlowController.class);
    private final EmployeeProxyService userProxyService;
    @Value("${workflowtoken}")
    private String training_token;
    @Autowired
    private WorkflowImpl workflowServiceEmp;

    @Autowired
    public WorkflowDemoController(EmployeeProxyService userProxyService) {
        this.userProxyService = userProxyService;
    }


    //Permission All User have the permission to create a request
    @PreAuthorize("hasAnyAuthority('start-workflow')")
    @RequestMapping(value = "/demo/workflow-start-request", method = RequestMethod.POST)
    public ResponseType startProcessInstance(@RequestBody UserRequestModel request,
                                             @RequestHeader(name = "Authorization") String token,
                                             @AuthenticationPrincipal CustomPrincipal principal) {
        EmpModel requestedEmployee = null;
        boolean createdStatus = false;
        if (request != null && request.getWorkflowType() != null) {
            asyncWorkflowStartAction(request);
            logger.info("Success ###");
            ResponseType response = new ResponseType(Constants.CREATED, MessageUtil.SUCCESS, createdStatus,
                    null);
            return response;
        } else {
            logger.info("Failed ###");
            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                    null);
            return response;
        }


    }

    //    @Async("asynchronousListenerExecutor")
    public void asyncWorkflowStartAction(UserRequestModel request) {
        EmpModel requestedEmployee = null;
        boolean createdStatus = false;
        try {
            logger.info("### Request started for user" + request.getJobId());
            //TODO need to change the request.getUserId() to  principal.getJid()
            ResponseType userdata = userProxyService.getUserById(request.getJobId(), training_token);
            if (userdata != null && userdata.getData() != null && userdata.isStatus()) {
                ObjectMapper mapper = new ObjectMapper();
                requestedEmployee = mapper.convertValue(
                        userdata.getData(),
                        new TypeReference<EmpModel>() {
                        });
                request.setDepartment(requestedEmployee.getDepartment());
                request.setDepartmentId(requestedEmployee.getDepartmentId());
                request.setEmail(requestedEmployee.getEmail());
                request.setCnameAr(requestedEmployee.getCnameAr());
                request.setCnameEn(requestedEmployee.getCnameEn());
                request.setJobId(requestedEmployee.getJobId());
                request.setMobile(requestedEmployee.getMobile());
                request.setPositionId(requestedEmployee.getPositionId());
                request.setSecionCode(requestedEmployee.getSecionCode());
                request.setJobId(requestedEmployee.getJobId());
                request.setJobTitle(requestedEmployee.getJobTitle());
                createdStatus = workflowServiceEmp.startProcessWFType1(request, request.getWorkflowType());


            } else {
//                ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
//                        null);
//                return response;
                //TODO log error
                logger.info("error in async2 ");
            }
        } catch (Exception e) {
            e.printStackTrace();
//            ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
//                    null);
//            return response;
            //TODO log error
            logger.info("error in async");
        }
    }


    @RequestMapping(value = "/demo/my-tasks", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TaskRepresentation> getTasks(@RequestParam String assignee) {
        List<Task> tasks = workflowServiceEmp.getTasks(assignee);
        List<TaskRepresentation> dtos = new ArrayList<TaskRepresentation>();
        for (Task task : tasks) {
            TaskRepresentation taskRepresentation = new TaskRepresentation(
                    task.getId(),
                    task.getName(),
                    task.getProcessInstanceId(),
                    task.getExecutionId());
            taskRepresentation.setUserRequestModel(workflowServiceEmp.getProcessDetails(task.getExecutionId()));
            dtos.add(taskRepresentation);
        }
        return dtos;
    }

    @RequestMapping(value = "/demo/my-tasks-delegation", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<TaskRepresentation> getTasksDelegations(@RequestParam String assignee) {
        List<Task> tasks = workflowServiceEmp.getCandidateTasks(assignee);
        List<TaskRepresentation> dtos = new ArrayList<TaskRepresentation>();
        for (Task task : tasks) {
            TaskRepresentation taskRepresentation = new TaskRepresentation(
                    task.getId(),
                    task.getName(),
                    task.getProcessInstanceId(),
                    task.getExecutionId());
            taskRepresentation.setUserRequestModel(workflowServiceEmp.getProcessDetails(task.getExecutionId()));
            dtos.add(taskRepresentation);
        }
        return dtos;
    }


    @RequestMapping(value = "/demo/execute-task", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public UserTaskModel getTasks(@RequestBody UserTaskModel assignee) {
        boolean tasks = workflowServiceEmp.processTask(
                assignee.getTaskId(),
                assignee.getAssigne(),
                assignee.getProcessId(),
                assignee.getRole(),
                assignee.getAction(), assignee.getExecutionId(),
                assignee.getProcessInstanceId() != null ? assignee.getProcessInstanceId() : null,
                assignee.getCommandMessage() != null ? assignee.getCommandMessage() : null);
        assignee.setStatus(tasks);
        return assignee;
    }

    // TODO: Note-Get the history based on processId
    @RequestMapping(value = "/demo/process-history", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricDetail> getHistoryByProcessId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTaskByProcessId(assignee.getProcessId());
        //return assignee;
    }


    @RequestMapping(value = "/demo/process-history-execution-details", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricDetail> getHistoryByExecutionId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTaskByExecutionIdId(assignee.getExecutionId());
        //return assignee;
    }

    //TODO: Note-Get the task based on execution Id, This is important
    @RequestMapping(value = "/demo/process-history-task-details", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricTaskInstance> getHistoryByTaskId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTaskByTaskIdId(assignee.getExecutionId());
        //return assignee;
    }


    //TODO: Note-Get the task based on execution Id, This is important
    @RequestMapping(value = "/demo/task-comments", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Comment> getComments(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getComments(assignee.getTaskId());
        //return assignee;
    }


    @RequestMapping(value = "/demo/save-comment", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public Comment saveComment(@RequestBody UserTaskModel assignee) {
        //TODO check all fields are not null
        return workflowServiceEmp.saveComment(assignee.getTaskId(), assignee.getProcessInstanceId(), assignee.getCommandMessage());
        //return assignee;
    }

    //Get the user task details based on processId
    @RequestMapping(value = "/demo/process-user-tasks-process-id", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricIdentityLinkLog> getHistoryUserTaskByProcessId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTasksByprocessId(assignee.getProcessId());
        //return assignee;
    }

    @RequestMapping(value = "/demo/process-history-by-user-id", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<HistoricIdentityLinkLog> getHistoryByUserId(@RequestBody UserTaskModel assignee) {
        return workflowServiceEmp.getUserTasksByAssignee(assignee.getAssigne(), assignee.getFirstResult(), assignee.getMaxResult()); //start // limit
        //return assignee;
    }

    static class TaskRepresentation {

        private String id;
        private String name;
        private String processId;
        private String executionId;
        private UserRequestModel userRequestModel;

        public TaskRepresentation(String id, String name, String processInstanceid, String executionId) {
            this.id = id;
            this.name = name;
            this.processId = processInstanceid;
            this.executionId = executionId;
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
