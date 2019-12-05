package qa.gov.customs.training.service;


import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.models.CancelRequestStatus;
import qa.gov.customs.training.models.TrainingRequestStatus;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.repository.TacCourseDateRepository;

import java.util.List;

public interface EmployeeRequestService {

    UserRequestModel saveRequest(UserRequestModel request);

    TacWorkflowReference updateRequest(TacWorkflowReference request);

    TacWorkflowReference findById(String id);

    UserRequestModel UpdateCourseRequest(TrainingRequestStatus status);

    Boolean checkTheEmployeeAlreadyAppliedWithActivationId(UserRequestModel request);

    List<TacWorkflowReference> findByToUser(String toUser);

    CancelRequestStatus cancelRequest(String requestId, String jobId);

    CancelRequestStatus cancelRequestStatus(String requestId);


    Boolean findCancelledStatusById(String id);

}
