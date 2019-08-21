package qa.gov.customs.training.entity;


import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name="TAC_WORKFLOW_REFERENCE")

public class TacWorkflowReference {

    @Id
    @Column(name = "WORKFLOW_ID", unique = true, nullable = false, precision = 22, scale = 0)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "id_Sequence")
    @SequenceGenerator(name = "id_Sequence", sequenceName = "TAC_WORKFLOW_SEQ", allocationSize = 1)
    BigDecimal workflowId;
    @Column(name="TYPE")
    String type;
    @Column(name="DATA")
    String  data;
    @Column(name="PROCESS_ID")
    String processId;


    public BigDecimal getWorkflowId() {
        return workflowId;
    }

    public void setWorkflowId(BigDecimal workflowId) {
        this.workflowId = workflowId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getProcessId() {
        return processId;
    }

    public void setProcessId(String processId) {
        this.processId = processId;
    }
}
