package qa.gov.customs.training.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.joda.time.DateTime;
import org.joda.time.Days;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.config.Publisher;
import qa.gov.customs.training.entity.TacCourseDate;
import qa.gov.customs.training.entity.TacWorkflowReference;
import qa.gov.customs.training.models.CancelRequestStatus;
import qa.gov.customs.training.models.TrainingRequestStatus;
import qa.gov.customs.training.models.UserRequestModel;
import qa.gov.customs.training.repository.ActivationRepository;
import qa.gov.customs.training.repository.EmployeeRequestRepository;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.service.EmployeeRequestService;
import qa.gov.customs.training.utils.SystemUtil;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static qa.gov.customs.training.utils.MessageUtil.*;

@Service
public class EmployeeRequestServiceImpl implements EmployeeRequestService {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeRequestServiceImpl.class);
    @Autowired
    EmployeeRequestRepository requestRepository;

    @Autowired
    ActivationRepository activationRepository;

    @Autowired
    CourseService courseService;

    @Autowired
    Publisher publisher;


    @Override
    public UserRequestModel saveRequest(UserRequestModel requestModel) {
        TacWorkflowReference tacWorkflowReference = new TacWorkflowReference();
        String idGenerated = SystemUtil.getUUID();
        tacWorkflowReference.setCreatedOn(new Date());
        tacWorkflowReference.setType(requestModel.getWorkflowType());
        tacWorkflowReference.setWorkflowId(idGenerated);
        tacWorkflowReference.setData(jsonProcessing(requestModel));
        tacWorkflowReference.setFromUser(requestModel.getJobId());
        if (requestModel.getForUserJobId() != null) {
            tacWorkflowReference.setToUser(requestModel.getForUserJobId());
        } else {
            tacWorkflowReference.setToUser(requestModel.getJobId());
        }
        if (requestModel.getCourseActivationId() != null)
            tacWorkflowReference.setActivationId(new BigInteger(requestModel.getCourseActivationId()));
        if (requestModel.getCourseId() != null)
            tacWorkflowReference.setCourseId(new BigInteger(requestModel.getCourseId()));
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
        Optional<TacWorkflowReference> reference = requestRepository.findById(id);
        if (reference.isPresent())
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
            } catch (Exception e) {
                e.printStackTrace();
                return null;
            }
        } else {
            return null;
        }
    }

    @Override
    public Boolean checkTheEmployeeAlreadyAppliedWithActivationId(UserRequestModel request) {
        BigInteger activationId = new BigInteger(request.getCourseActivationId());
        String userId = null;
        if (request.getJobId() != null) {
            userId = request.getJobId();
        }
        if (request.getForUserJobId() != null) {
            userId = request.getForUserJobId();
        }
        List<TacWorkflowReference> items =
                requestRepository.findByToUserAndActivationId(userId, activationId);
        if (items != null && items.size() > 0) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<TacWorkflowReference> findByToUser(String toUser) {
        return requestRepository.findByToUser(toUser);

    }

    @Override
    public CancelRequestStatus cancelRequest(String requestId, String jobId) {
        Optional<TacWorkflowReference> optional =   requestRepository.findById(requestId);
        if(optional.isPresent()){
            if(optional.get().getActivationId()!=null){
                BigDecimal activationDateId =    activationRepository.getDateByActivationId(new BigDecimal(optional.get().getActivationId()));
                if(activationDateId!=null){
                   TacCourseDate dates=  courseService.findStartAndEndDateById(activationDateId);
                   if(dates!=null){
                       DateTime fromDate =new DateTime();
                       DateTime toDate =new DateTime(dates.getCourseDate().getTime());
                       if(Days.daysBetween(fromDate,toDate).getDays()>3){
                           TacWorkflowReference reference = optional.get();
                           reference.setCancelledFalg(new BigInteger("1"));
                           reference.setCancelledOn(new Date());
                           reference.setCancelledBy(jobId);
                           TacWorkflowReference updated =  requestRepository.save(reference);
                           if(updated!=null){
                               String message =  String.format(CANCEL_REQUEST_SUCESS,requestId);
                               logger.info(message);
                               CancelRequestStatus request= new CancelRequestStatus(message,true,requestId);
                               //TODO here to send a message to the workflow to cancel the notification
                               publisher.sendCancelRequest(request);
                               //Todo remove from attendees
                               courseService.deleteAttendees(reference.getActivationId(),reference.getToUser(),reference.getWorkflowId());
                               return  request;
                           }else{
                               String message =  String.format(CANCEL_FAILED_REQUEST,requestId);
                               logger.info(message);
                               return  new CancelRequestStatus(message,false);
                           }
                       } else {
                           String message =  String.format(CANCEL_REQUEST_ISSUE,requestId);
                           logger.info(message);
                           return  new CancelRequestStatus(message,false);
                       }
                   }else{
                       String message =  String.format(CANCEL_REQUEST_DATE_INVALID_ISSUE,requestId);
                       logger.info(message);
                       return  new CancelRequestStatus(message,false);
                   }
                }else{
                    String message =  String.format(CANCEL_REQUEST_DATE_ISSUE,requestId);
                    logger.info(message);
                    return  new CancelRequestStatus(message,false);
                }
            }else{
                String message =  String.format(CANCEL_REQUEST_ACTIVATION_ID_ISSUE,requestId);
                logger.info(message);
                return  new CancelRequestStatus(message,false);
            }
        }else{
            String message =  String.format(CANCEL_REQUEST_REQUEST_ID_ISSUE,requestId);
            logger.info(message);
            return  new CancelRequestStatus(message,false);
        }
    }

    @Override
    public CancelRequestStatus cancelRequestStatus(String requestId) {
        Optional<TacWorkflowReference> cancel =  requestRepository.findById(requestId);
        CancelRequestStatus item =new CancelRequestStatus();
        item.setRequestId(requestId);
        if(cancel.isPresent() && cancel.get().getCancelledFalg().equals(new BigInteger("1"))){
            item.setStatus(true);
            item.setCancelledDate(cancel.get().getCancelledOn());
        }else{
            item.setStatus(false);
        }
        return item;
    }

    @Override
    public Boolean findCancelledStatusById(String id) {
        Optional<TacWorkflowReference> workflowReference = requestRepository.findById(id);
        if(workflowReference.isPresent()){

            if(workflowReference.get().getCancelledFalg().equals("1")){
                return true;
            }else{
                return  false;
            }

        }else{
            return false;
        }
    }


    String jsonProcessing(UserRequestModel request) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json = mapper.writeValueAsString(request);
            return json;
        } catch (Exception e) {
            logger.error("JSON Parsing error");
            logger.error(e.toString());
            return null;

        }
    }
}