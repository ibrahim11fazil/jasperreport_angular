package qa.gov.customs.workflowcamuda.service;


import qa.gov.customs.workflowcamuda.entity.RequestActions;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

import java.util.Optional;


public interface RequestService {
    RequestActions saveOrUpdateWorkflow(UserRequestModel request, String status);
    void deleteRequest(String requestId);
    Optional<RequestActions> findById(UserRequestModel request);
}
