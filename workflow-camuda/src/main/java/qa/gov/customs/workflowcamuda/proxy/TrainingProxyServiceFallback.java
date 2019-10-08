package qa.gov.customs.workflowcamuda.proxy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.ResponseType;
import qa.gov.customs.workflowcamuda.utils.Constants;
import qa.gov.customs.workflowcamuda.utils.MessageUtil;

@Component
public class TrainingProxyServiceFallback implements  TrainingProxyService{

    private static final Logger logger = LoggerFactory.getLogger(TrainingProxyServiceFallback.class);
    @Override
    public ResponseType updateWorkFlow(String id, String status, String wtoken) {
        logger.error("TrainingProxyServiceFallback: error in server employee updateWorkFlow ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    ResponseType  get(int code, String message, boolean status, Object data){
        ResponseType response = new ResponseType(code,message, status,
                data);
        return response;
    }
}
