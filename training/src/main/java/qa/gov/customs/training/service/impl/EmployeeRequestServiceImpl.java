package qa.gov.customs.training.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.repository.EmployeeRequestRepository;
import qa.gov.customs.training.service.EmployeeRequestService;

@Service
public class EmployeeRequestServiceImpl implements EmployeeRequestService {

    @Autowired
    EmployeeRequestRepository requestRepository;

    @Override

    public TacWorkflowReference saveRequest(TacWorkflowReference tacWorkflowReference) {


        TacWorkflowReference courseRequest = requestRepository.save(tacWorkflowReference);
        return courseRequest;
    }
}