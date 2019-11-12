package qa.gov.customs.workflowcamuda.service.workflow;



import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.JavaDelegate;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.config.Publisher;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

@Component
@Qualifier("checkSeatsAmqpAdapter")
public class CheckSeatsAmqpAdapter implements  JavaDelegate {

    @Autowired
    protected Publisher publisher;

    @Override
    public void execute(DelegateExecution ctx) throws Exception {

            UserRequestModel object = (UserRequestModel) ctx.getVariable(WorkflowConstants.WORKFLOW_APPLICANT_VARIABLE);
            publisher.checkSeatRequest(object);

    }
}
