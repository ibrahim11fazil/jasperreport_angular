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



}
