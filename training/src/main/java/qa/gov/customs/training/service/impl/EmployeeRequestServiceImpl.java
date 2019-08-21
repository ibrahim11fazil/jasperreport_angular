package qa.gov.customs.training.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.repository.EmployeeRequestRepository;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.utils.SystemUtil;

import java.util.Date;

@Service
public class EmployeeRequestServiceImpl implements EmployeeRequestService {

    @Autowired
    EmployeeRequestRepository requestRepository;

    private static final Logger logger = LoggerFactory.getLogger(EmployeeRequestServiceImpl.class);

    @Override
    public TacWorkflowReference saveRequest(TacWorkflowReference tacWorkflowReference) {
        tacWorkflowReference.setCreatedOn(new Date());
        tacWorkflowReference.setType(tacWorkflowReference.getType());
        tacWorkflowReference.setWorkflowId(SystemUtil.getUUID());
        tacWorkflowReference.setData(jsonProcessing(tacWorkflowReference));
        TacWorkflowReference courseRequest = requestRepository.save(tacWorkflowReference);
        return courseRequest;
    }


    String jsonProcessing(TacWorkflowReference request ){
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json = mapper.writeValueAsString(request);
            return json;
        }catch (Exception e){
            logger.error("JSON Parsing error");
            logger.error(e.toString());
            return null;

        }
    }
}