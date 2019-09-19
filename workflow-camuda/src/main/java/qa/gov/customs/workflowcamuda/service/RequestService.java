package qa.gov.customs.workflowcamuda.service;


import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.entity.RequestActions;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;


public interface RequestService {
     RequestActions saveOrUpdateWorkflow(UserRequestModel request,String status);
}
