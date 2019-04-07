package qa.gov.customs.workflow.service;


import org.flowable.engine.HistoryService;
import org.flowable.engine.RuntimeService;
import org.flowable.engine.TaskService;
import org.flowable.engine.history.HistoricProcessInstance;
import org.flowable.task.api.Task;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class UserProcessService {

    @Autowired
    private RuntimeService runtimeService;

    @Autowired
    private TaskService taskService;


    @Autowired
    private TrainingService trainingService;

    @Transactional
    public void startProcess() {
        String uuid=  UUID.randomUUID().toString();
        runtimeService.startProcessInstanceByKey("oneTaskProcess1",uuid);
        System.out.println(">>>>>>" + uuid);
        //runtimeService.startProcessInstanceByKey("oneTaskProcess1");
    }



    @Transactional
    public List<Task> getTasks(String assignee) {
        return taskService.createTaskQuery().taskAssignee(assignee).list();
       // return taskService.get
    }


    @Transactional
    public boolean processTask(String taskId, String userId) {
        //claim(String taskId, String userId)
        try {
            //taskService.claim(taskId, userId);
            Map variables = new HashMap<String, Object>();
            variables.put("approved", "approved");
            taskService.complete(taskId, variables);
            //taskService.complete(taskId);
            // return taskService.createTaskQuery().taskAssignee(assignee).list();
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return  false;
        }

    }

//    @Transactional
//    public void printHistoryService(){
//        HistoryService historyService = taskService.getProcessInstanceAttachments("").getHistoryService();
//        HistoricProcessInstance historicProcessInstance =
//                historyService.createHistoricProcessInstanceQuery().processInstanceId(procId).singleResult();
//        System.out.println("Process instance end time: " + historicProcessInstance.getEndTime());
//
//    }




}