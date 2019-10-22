package qa.gov.customs.workflowcamuda.service;


import qa.gov.customs.workflowcamuda.entity.RequestActions;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;


public interface RequestService {
    RequestActions saveOrUpdateWorkflow(UserRequestModel request, String status);
}
