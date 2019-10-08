package qa.gov.customs.workflowcamuda.proxy;

import org.apache.catalina.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.ResponseType;
import qa.gov.customs.workflowcamuda.utils.Constants;
import qa.gov.customs.workflowcamuda.utils.MessageUtil;

import java.math.BigInteger;

@Component
public class UserSSOProxyFallback implements UserSSOProxy {

    private static final Logger logger = LoggerFactory.getLogger(UserSSOProxyFallback.class);

    @Override
    public ResponseType findAllSystemUsersByRole(BigInteger roleId, String token) {
        logger.error("UserSSOProxyFallback: error in server employee findAllSystemUsersByRole ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType checkUserIsHeadOfTraining(String id, String wtoken) {
        logger.error("UserSSOProxyFallback: error in server employee checkUserIsHeadOfTraining ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getTrainingDepartmentHeads(String wtoken) {
        logger.error("UserSSOProxyFallback: error in server employee getTrainingDepartmentHeads ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    ResponseType  get(int code, String message, boolean status, Object data){
        ResponseType response = new ResponseType(code,message, status,
                data);
        return response;
    }
}
