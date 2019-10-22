package qa.gov.customs.training.service;


import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.models.TrainingRequestStatus;
import qa.gov.customs.training.models.UserRequestModel;

public interface EmployeeRequestService {

    UserRequestModel saveRequest(UserRequestModel request);

    TacWorkflowReference updateRequest(TacWorkflowReference request);

    TacWorkflowReference findById(String id);

    UserRequestModel UpdateCourseRequest(TrainingRequestStatus status);

    Boolean checkTheEmployeeAlreadyAppliedWithActivationId(UserRequestModel request);

}
