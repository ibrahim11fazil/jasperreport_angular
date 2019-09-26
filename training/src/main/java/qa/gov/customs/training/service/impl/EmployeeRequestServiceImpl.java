package qa.gov.customs.training.service.impl;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.models.TrainingRequestStatus;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.repository.EmployeeRequestRepository;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.SystemUtil;

import java.math.BigInteger;
import java.util.Date;
import java.util.List;
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
        tacWorkflowReference.setFromUser(requestModel.getJobId());
        if(requestModel.getForUserJobId()!=null) {
            tacWorkflowReference.setToUser(requestModel.getForUserJobId());
        }
        else{
         tacWorkflowReference.setToUser(requestModel.getJobId());
        }
        if(tacWorkflowReference.getActivationId()!=null)
            tacWorkflowReference.setActivationId(tacWorkflowReference.getActivationId());
        if(tacWorkflowReference.getCourseId()!=null)
            tacWorkflowReference.setCourseId(tacWorkflowReference.getCourseId());
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

    @Override
    public UserRequestModel UpdateCourseRequest(TrainingRequestStatus status) {
        TacWorkflowReference reference = findById(status.getRequestId());
        if (reference != null) {
            reference.setUpdatedOn(new Date());
            reference.setResponseStatus(status.getStatus());
            reference = updateRequest(reference);
            ObjectMapper mapper = new ObjectMapper();
//            UserRequestModel requestModel   = mapper.convertValue(
//                    reference.getData(),
//                    new TypeReference<UserRequestModel>() {
//                    });

            try {
                UserRequestModel requestModel = mapper.readValue(reference.getData(), UserRequestModel.class);
                return requestModel;
            }catch (Exception e){
                e.printStackTrace();
                return null;
            }
        }else{
            return null;
        }
    }

    @Override
    public Boolean checkTheEmployeeAlreadyAppliedWithActivationId(UserRequestModel request) {
        BigInteger activationId=new BigInteger(request.getCourseActivationId());
        String userId=null;
        if(request.getJobId()!=null){
            userId=request.getJobId();
        }
        if(request.getForUserJobId()!=null){
            userId=request.getForUserJobId();
        }
        List<TacWorkflowReference> items =
                requestRepository.findByToUserAndActivationId(userId,activationId);
        if(items!=null && items.size()>0){
           return true;
        } else{
           return false;
        }
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