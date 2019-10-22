package qa.gov.customs.workflowcamuda.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.workflowcamuda.entity.RequestActions;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;
import qa.gov.customs.workflowcamuda.repository.RequestRepository;
import qa.gov.customs.workflowcamuda.service.RequestService;
import qa.gov.customs.workflowcamuda.utils.WorkflowStatus;

import java.util.Date;
import java.util.Optional;

@Service
public class RequestServiceImpl implements RequestService {
    private static final Logger logger = LoggerFactory.getLogger(RequestServiceImpl.class);
    @Autowired
    RequestRepository requestRepository;

    @Override
    public RequestActions saveOrUpdateWorkflow(UserRequestModel request, String status) {
        if (request.getTrainingRequestId() != null) {
            Optional<RequestActions> requestAction = requestRepository.findById(request.getTrainingRequestId());
            if (requestAction.isPresent()) {
                requestAction.get().setrStatus(status);
                requestAction.get().setrUpdatedOn(new Date());
                return requestRepository.save(requestAction.get());
            } else {
                RequestActions action = new RequestActions();
                action.setrCreatedOn(new Date());
                if (status != null)
                    action.setrStatus(status);
                else
                    action.setrStatus(WorkflowStatus.CREATED);
                action.setUid(request.getTrainingRequestId());
                action.setrType(request.getWorkflowType());
                String requestJson = jsonProcessing(request);
                action.setrData(requestJson);
                if (requestJson != null)
                    return requestRepository.save(action);
                else
                    return null;
            }
        } else {
            //TODO no need to workout this request
            logger.error("NO Unique id ----->>>> " + jsonProcessing(request));
            return null;
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
