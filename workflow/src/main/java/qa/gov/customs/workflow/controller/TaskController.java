package qa.gov.customs.workflow.controller;

import org.flowable.task.api.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import qa.gov.customs.workflow.model.UserTask;
import qa.gov.customs.workflow.service.UserProcessService;

import java.util.ArrayList;
import java.util.List;


@RestController
public class TaskController {

    @Autowired
    private UserProcessService myService;

    @RequestMapping(value="/process", method= RequestMethod.POST)
    public void startProcessInstance() {
        myService.startProcess();
    }

    @RequestMapping(value="/tasks", method= RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public List<TaskRepresentation> getTasks(@RequestParam String assignee) {
        List<Task> tasks = myService.getTasks(assignee);
        List<TaskRepresentation> dtos = new ArrayList<TaskRepresentation>();
        for (Task task : tasks) {
            dtos.add(new TaskRepresentation(task.getId(), task.getName()));
        }
        return dtos;
    }

    @RequestMapping(value="/executeTask", method= RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
    public UserTask getTasks(@RequestBody UserTask assignee) {
        boolean tasks = myService.processTask(assignee.getTaskId(),assignee.getAssigne());
        assignee.setStatus(tasks);
        return assignee;
    }

    static class TaskRepresentation {

        private String id;
        private String name;

        public TaskRepresentation(String id, String name) {
            this.id = id;
            this.name = name;
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
    }




}