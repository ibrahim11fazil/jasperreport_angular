//package qa.gov.customs.workflowcamuda.service;
//
//import org.camunda.bpm.engine.HistoryService;
//import org.camunda.bpm.engine.RuntimeService;
//import org.camunda.bpm.engine.TaskService;
//import org.camunda.bpm.engine.history.UserOperationLogEntry;
//import org.camunda.bpm.engine.history.UserOperationLogQuery;
//import org.camunda.bpm.engine.runtime.ProcessInstance;
//import org.camunda.bpm.engine.task.Comment;
//import org.camunda.bpm.engine.task.Task;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import javax.transaction.Transactional;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//import java.util.UUID;
//
//@Service
//public class DemoService {
//
//    @Autowired
//    private RuntimeService runtimeService;
//
//    @Autowired
//    private TaskService taskService;
//
//    @Autowired
//    private HistoryService historyService;
//
//    public void startProcess() {
//        String uuid=  UUID.randomUUID().toString();
//
//        ProcessInstance processInstance = runtimeService.startProcessInstanceByKey("demo_process1", uuid);
//
//        //runtimeService.startProcessInstanceByKey("demo_process1",uuid);
//        logger.info(">>>>>>" + uuid  + ">> " + processInstance.getId() );
//        //runtimeService.startProcessInstanceByKey("oneTaskProcess1");
//        getHistory("sarath");
//    }
//
//
//
//   // @Transactional
//    public List<Task> getTasks(String assignee) {
//       return  taskService.createTaskQuery().taskAssignee(assignee).list();
//       // return taskService.createTaskQuery().taskAssignee(assignee).list();
//        // return taskService.get
//    }
//
//
//    public void getHistory(String assignee){
////        historyService.createUserOperationLogQuery()
////                .userId(assignee)  // only for authenticvated user
////                .listPage(0, 10).forEach(item->{
////            logger.info("TaskId " + item.getTaskId());
////            logger.info("operationId " + item.getOperationId());
////            logger.info("time stamp " + item.getTimestamp());
////            logger.info("key " + item.getProcessDefinitionKey());
////            logger.info("Id " + item.getProcessDefinitionId());
////        });
//
//        historyService.createHistoricTaskInstanceQuery()
//                .finished()
//                .taskAssignee(assignee)
//                .listPage(0, 10).forEach(item->{
//            logger.info("assingee " + item.getAssignee());
//            logger.info("getProcessInstanceId " + item.getProcessInstanceId());  /// process Id user need to store
//            logger.info("taskDefinition key " + item.getTaskDefinitionKey());
//            logger.info("getName  " + item.getName()); //Action Name
//            logger.info("parent task id  " + item.getParentTaskId());
//            logger.info("parent getDescription " + item.getDescription());
//           // item.getExecutionId()
//            logger.info("parent getExecutionId " + item.getExecutionId());
//            //item.get
//
//            //logger.info("parent task id  " + item());
//            //TODO  IF TASK ID IS HERE THEN ITS BETTER
//            logger.info("getProcessDefinitionKey  " + item.getProcessDefinitionKey());
//            logger.info("getProcessDefinitionId " + item.getProcessDefinitionId());
//
//            // Getting tasks based on process
//            historyService.createHistoricDetailQuery()
//                    .variableUpdates()
//                    .processInstanceId(item.getProcessInstanceId())
//                    .orderByVariableName().asc()
//                    .list().forEach( item1 -> {
//
//                logger.info("task Id > " + item1.getId() + " " + item1.getTaskId() );
//                logger.info("getProcessDefinitionId  " + item1.getProcessDefinitionId());
//
//            });
//
//
//        historyService.createUserOperationLogQuery()
//                    .processDefinitionId(item.getProcessDefinitionId())
//
//                    .list().forEach(item2 -> {
//
//            logger.info("task Id >>> " + item2.getTaskId() + " " + item2.getNewValue() );
//
//        });
//
//
//
//        });
//
//
//
//
//
//
//
//
//
//    }
//
//
//   // @Transactional
//    public boolean processTask(String taskId, String userId,String processId) {
//        //claim(String taskId, String userId)
//        try {
//            //taskService.claim(taskId, userId);
//            Map variables = new HashMap<String, Object>();
//            variables.put("approved", "approved");
//
//            taskService.createComment(taskId,processId,"he is ok11111");
//           // taskService.claim(taskId,userId); // set claim before commenting
//           // taskService.setOwner(taskId,userId);
//           // taskService.setAssignee(taskId,userId);
//            taskService.createComment(taskId,processId,"he is ok");
//            taskService.createComment(taskId,processId,"he is double ok ");
//            taskService.complete(taskId,  null);
//
//
//           List<Comment> comments  = taskService.getProcessInstanceComments(processId);
//
//           comments.forEach(item -> {
//                       logger.info("userName " + item.getUserId());
//                       logger.info("message " + item.getFullMessage());
//                       logger.info("taskIs  " + item.getTaskId());
//
//                   }
//                   );
//
//
//            //taskService.complete(taskId);
//            // return taskService.createTaskQuery().taskAssignee(assignee).list();
//            return true;
//        }catch (Exception e){
//            e.printStackTrace();
//            return  false;
//        }
//
//    }
//}
