package qa.gov.customs.training.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.repository.EmployeeRequestRepository;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.utils.SystemUtil;

import java.util.Date;
import java.util.Optional;

@Service
public class EmployeeRequestServiceImpl implements EmployeeRequestService {

    @Autowired
    EmployeeRequestRepository requestRepository;

    private static final Logger logger = LoggerFactory.getLogger(EmployeeRequestServiceImpl.class);

    @Override
    public UserRequestModel saveRequest(UserRequestModel requestModel) {
        TacWorkflowReference tacWorkflowReference =new TacWorkflowReference();
        String idGenerated = SystemUtil.getUUID();
        tacWorkflowReference.setCreatedOn(new Date());
        tacWorkflowReference.setType(requestModel.getWorkflowType());
        tacWorkflowReference.setWorkflowId(idGenerated);
        tacWorkflowReference.setData(jsonProcessing(requestModel));
        requestRepository.save(tacWorkflowReference);
        requestModel.setTrainingRequestId(idGenerated);
        return requestModel;
    }

    @Override
    public TacWorkflowReference updateRequest(TacWorkflowReference request) {
        return requestRepository.save(request);
    }

    @Override
    public TacWorkflowReference findById(String id) {
        Optional<TacWorkflowReference> reference =  requestRepository.findById(id);
        if(reference.isPresent())
            return reference.get();
        else
            return null;
    }


    String jsonProcessing(UserRequestModel request ){
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