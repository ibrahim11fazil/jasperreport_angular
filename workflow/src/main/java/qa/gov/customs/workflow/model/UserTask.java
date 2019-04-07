package qa.gov.customs.workflow.model;

public class UserTask {

   private  String taskId;
   private String assigne;
   private boolean status;


    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getAssigne() {
        return assigne;
    }

    public void setAssigne(String assigne) {
        this.assigne = assigne;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }
}
