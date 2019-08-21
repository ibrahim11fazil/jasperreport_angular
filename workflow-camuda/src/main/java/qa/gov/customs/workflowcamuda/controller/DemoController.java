//package qa.gov.customs.workflowcamuda.controller;
//
//import org.camunda.bpm.engine.task.Task;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.*;
//import qa.gov.customs.workflowcamuda.model.UserTaskModel;
//import qa.gov.customs.workflowcamuda.service.DemoService;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@RestController
//public class DemoController {
//
//    @Autowired
//    private DemoService myService;
//
//    @RequestMapping(value="/process", method= RequestMethod.POST)
//    public void startProcessInstance() {
//        myService.startProcess();
//    }
//
//    @RequestMapping(value="/tasks", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
//    public List<TaskRepresentation> getTasks(@RequestParam String assignee) {
//        List<Task> tasks = myService.getTasks(assignee);
//        List<TaskRepresentation> dtos = new ArrayList<TaskRepresentation>();
//        for (Task task : tasks) {
//            dtos.add(new TaskRepresentation(task.getId(), task.getName(),task.getProcessInstanceId()));
//        }
//        return dtos;
//    }
//
//    @RequestMapping(value="/executeTask", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
//    public UserTaskModel getTasks(@RequestBody UserTaskModel assignee) {
//        boolean tasks = myService.processTask(assignee.getTaskId(),assignee.getAssigne(),assignee.getProcessId());
//        assignee.setStatus(tasks);
//        return assignee;
//    }
//
//    //TODO need to create Comment and User TAble
//    //TODO need to create Attachments and User TAble
//    //TODO need to create a request Table for the processes by each user
//
//    //TODO History of actions based on processId
//    //TODO History of actions for a particular assigne   DONE
//    //TODO Status based on the processId
//
//    //TODO get the manager of a user -- BPMN
//    //TODO yes or no flow in the -- BPMN
//    //TODO yes,no,later flow in the BPMN
//    //TODO Delegation
//    //TODO claim,unclaim,reassign
//
//
//
//    static class TaskRepresentation {
//
//        private String id;
//        private String name;
//        private String processId;
//
//        public TaskRepresentation(String id, String name,String processInstanceid) {
//            this.id = id;
//            this.name = name;
//            this.processId=processInstanceid;
//        }
//
//        public String getId() {
//            return id;
//        }
//        public void setId(String id) {
//            this.id = id;
//        }
//        public String getName() {
//            return name;
//        }
//        public void setName(String name) {
//            this.name = name;
//        }
//
//        public String getProcessId() {
//            return processId;
//        }
//
//        public void setProcessId(String processId) {
//            this.processId = processId;
//        }
//    }
//}
