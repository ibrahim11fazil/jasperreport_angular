package qa.gov.customs.workflowcamuda.proxy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.ResponseType;
import qa.gov.customs.workflowcamuda.utils.Constants;
import qa.gov.customs.workflowcamuda.utils.MessageUtil;

@Component
public class EmployeeProxyFallback implements EmployeeProxyService {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeProxyFallback.class);

    @Override
    public ResponseType getUserById(String id, String wtoken) {

        logger.error("EmployeeProxyFallback: error in server employee getUserById ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getEmployeeHead(String id, String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee getEmployeeHead ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getEmployeeManager(String id, String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee getEmployeeManager ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getTrainingDepartmentHead(String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee getTrainingDepartmentHead ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getHeadOfTrainingCenterManager(String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee getHeadOfTrainingCenterManager ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getLegalManager(String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee getLegalManager ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType checkUserIsHeadOfTraining(String id, String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee checkUserIsHeadOfTraining ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType checkUserIsManager(String id, String did, String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee checkUserIsManager ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType checkTheUserIsAbsent(String id, String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee checkTheUserIsAbsent ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getDelegationForEmployee(String id, String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee getDelegationForEmployee ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    @Override
    public ResponseType getAssistantGeneralManager(String wtoken) {
        logger.error("EmployeeProxyFallback: error in server employee getAssistantGeneralManager ");
        return get(Constants.SERVER_ERROR, MessageUtil.FAILED, false,
                null);
    }

    ResponseType get(int code, String message, boolean status, Object data) {
        ResponseType response = new ResponseType(code, message, status,
                data);
        return response;
    }
}
