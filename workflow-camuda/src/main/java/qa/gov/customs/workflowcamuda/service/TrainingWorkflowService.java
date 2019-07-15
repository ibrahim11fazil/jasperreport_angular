package qa.gov.customs.workflowcamuda.service;


import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

@Component
@Qualifier("trainingWorkflowService")
public class TrainingWorkflowService {


    public String findHeadOfSectionForEmployee(UserRequestModel model){
        return "fatma-2";
    }

    public String findManagerForEmployee(UserRequestModel model){
        return "Adel-1";
    }

    public String findHeadofTrainingAndContinousEducation(UserRequestModel model){
        return "Jijo-3";
    }

    public void rejectionMail(UserRequestModel model){
        System.out.println("Rejected" + model.getEmail());
    }

    public void acceptAction(UserRequestModel model){
        System.out.println("Accepted" + model.getEmail());
    }
}
