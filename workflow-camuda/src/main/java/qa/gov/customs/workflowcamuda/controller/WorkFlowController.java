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
import qa.gov.customs.workflowcamuda.proxy.UserProxyService;
import qa.gov.customs.workflowcamuda.security.CustomPrincipal;
import qa.gov.customs.workflowcamuda.service.workflow.WorkflowImpl;
import qa.gov.customs.workflowcamuda.utils.Constants;
import qa.gov.customs.workflowcamuda.utils.MessageUtil;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WorkFlowController {

    private static final Logger logger = LoggerFactory.getLogger(WorkFlowController.class);

    @Value("${workflowtoken}")
    private String training_token;

    @Autowired
    private WorkflowImpl workflowServiceEmp;

    private final UserProxyService userProxyService;

    @Autowired
    public WorkFlowController( UserProxyService userProxyService) {
        this.userProxyService=userProxyService;
    }


    //Permission All User have the permission to create a request
    @PreAuthorize("hasAnyAuthority('start_workflow')")
    @RequestMapping(value="/workflow-start-request", method= RequestMethod.POST)
    public ResponseType startProcessInstance(@RequestBody UserRequestModel request,@RequestHeader(name="Authorization") String token,@AuthenticationPrincipal CustomPrincipal principal) {
        EmpModel requestedEmployee = null;
        if(request!=null && request.getWorkflowType()!=null){
            asyncWorkflowStartAction( request);
            logger.info("Success ###");
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    null);
        }else{
            logger.info("Failed ###");
            //TODO log the request
            return get(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                    null);
        }


    }

//    @Async("asynchronousListenerExecutor")
    public void asyncWorkflowStartAction(UserRequestModel request){
        EmpModel requestedEmployee = null;
        boolean createdStatus=false;
        try {
            logger.info("### Request started for user" + request.getJobId());
            //TODO need to change the request.getUserId() to  principal.getJid()
            ResponseType userdata = userProxyService.getUserById(request.getJobId(),training_token);
            if(userdata!=null && userdata.getData()!=null && userdata.isStatus()){
                ObjectMapper mapper = new ObjectMapper();
                requestedEmployee = mapper.convertValue(
                        userdata.getData(),
                        new TypeReference<EmpModel>() {  });

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
                createdStatus =   workflowServiceEmp.startProcessWFType1(request,request.getWorkflowType());

            }else{
                //TODO log error
                logger.info("error in async2 ");
            }
        }
        catch (Exception e){
               e.printStackTrace();
            //TODO log error
             logger.info("error in async");
        }
    }


    @PreAuthorize("hasAnyAuthority('my_tasks')")
    @RequestMapping(value="/my-tasks", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getTasks(@AuthenticationPrincipal CustomPrincipal principal) {
        List<Task> tasks = workflowServiceEmp.getTasks(principal.getJid());
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
        if(dtos!=null && dtos.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    dtos);
        }else{
            //TODO log the request
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    dtos);
        }
    }

    @PreAuthorize("hasAnyAuthority('my_tasks')")
    @RequestMapping(value="/my-tasks-delegation", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getTasksDelegations(@AuthenticationPrincipal CustomPrincipal principal) {
        List<Task> tasks = workflowServiceEmp.getCandidateTasks(principal.getJid());
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
        if(dtos!=null && dtos.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    dtos);
        }else{
            //TODO log the request
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    dtos);
        }
    }

    @PreAuthorize("hasAnyAuthority('execute_task')")
    @RequestMapping(value="/execute-task", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getTasks(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        try {
            boolean tasks = workflowServiceEmp.processTask(
                    assignee.getTaskId(),
                    assignee.getAssigne(),
                    assignee.getProcessId(),
                    assignee.getRole(),
                    assignee.getAction(), assignee.getExecutionId(),
                    assignee.getProcessInstanceId() != null ? assignee.getProcessInstanceId() : null,
                    assignee.getCommandMessage() != null ? assignee.getCommandMessage() : null);
            assignee.setStatus(tasks);
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    assignee);
        }catch (Exception e){
            e.printStackTrace();
            //TODO log error...
            return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                    assignee);
        }
    }



    @PreAuthorize("hasAnyAuthority('workflow_history')")
    @RequestMapping(value="/process-history-execution-details", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getHistoryByExecutionId(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        List<HistoricDetail>  historicDetails = workflowServiceEmp.getUserTaskByExecutionIdId(assignee.getExecutionId());
        if(historicDetails!=null && historicDetails.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    historicDetails);
        }else{
            //TODO log the request
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    null);
        }
    }




    //TODO: Note-Get the task based on execution Id, This is important
    @PreAuthorize("hasAnyAuthority('get_comments')")
    @RequestMapping(value="/task-comments", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getComments(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        List<Comment> comments =  workflowServiceEmp.getComments(assignee.getTaskId());
        if(comments!=null && comments.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    comments);
        }else{
            //TODO log the request
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    null);
        }
    }

    @PreAuthorize("hasAnyAuthority('save_comments')")
    @RequestMapping(value="/save-comment", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType saveComment(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        //TODO check all fields are not null
        String jobID =  "@"+principal.getJid();
        String message="";
         if(assignee.getCommandMessage()!=null)
             message=jobID+": " +assignee.getCommandMessage();
         if(assignee.getTaskId()!=null && assignee.getProcessInstanceId()!=null) {
             Comment comment =  workflowServiceEmp.saveComment(assignee.getTaskId(), assignee.getProcessInstanceId(), message);
             return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                     comment);
         }else{
             //TODO log the request
             return get(Constants.BAD_REQUEST, MessageUtil.FAILED, false,
                     null);
         }
        //return assignee;
    }

    //Get the user task details based on processId
    @PreAuthorize("hasAnyAuthority('workflow_history')")
    @RequestMapping(value="/process-user-tasks-process-id", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getHistoryUserTaskByProcessId(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        List<HistoricIdentityLinkLog>  historicDetails =  workflowServiceEmp.getUserTasksByprocessId(assignee.getProcessId());
        if(historicDetails!=null && historicDetails.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    historicDetails);
        }else{
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    null);
        }
    }

    //TODO get the history ---> part 1
    @PreAuthorize("hasAnyAuthority('workflow_history')")
    @RequestMapping(value="/process-history-by-user-id", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getHistoryByUserId(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        List<HistoricIdentityLinkLog> historicDetails =  workflowServiceEmp.getUserTasksByAssignee(principal.getJid(),assignee.getFirstResult(),assignee.getMaxResult());
        if(historicDetails!=null && historicDetails.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    historicDetails);
        }else{
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    null);
        }
    }

    // TODO: Note-Get the history based on processId ---> part 2
    @PreAuthorize("hasAnyAuthority('workflow_history')")
    @RequestMapping(value="/process-history", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getHistoryByProcessId(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        List<HistoricDetail>  historicDetails =  workflowServiceEmp.getUserTaskByProcessId(assignee.getProcessId());
        if(historicDetails!=null && historicDetails.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    historicDetails);
        }else{
            //TODO log the request
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    null);
        }
    }


    //TODO: Note-Get the task based on execution Id, This is important ---> part 3
    @PreAuthorize("hasAnyAuthority('workflow_history')")
    @RequestMapping(value="/process-history-task-details", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public ResponseType getHistoryByTaskId(@RequestBody UserTaskModel assignee,@AuthenticationPrincipal CustomPrincipal principal) {
        List<HistoricTaskInstance>  historicDetails = workflowServiceEmp.getUserTaskByTaskIdId(assignee.getExecutionId());
        if(historicDetails!=null && historicDetails.size()>0){
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    historicDetails);
        }else{
            //TODO log the request
            return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.NOT_FOUND, false,
                    null);
        }
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

    ResponseType  get(int code, String message, boolean status, Object data){
        ResponseType response = new ResponseType(code,message, status,
                data);
        return response;
    }

}
