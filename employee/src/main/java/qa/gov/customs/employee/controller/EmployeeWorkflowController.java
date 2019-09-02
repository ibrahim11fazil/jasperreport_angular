package qa.gov.customs.employee.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.employee.entity.EmpModel;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.models.ImmediateManager;
import qa.gov.customs.employee.service.MawaredService;
import qa.gov.customs.employee.utils.Constants;
import qa.gov.customs.employee.utils.MessageUtil;
import qa.gov.customs.employee.utils.models.ResponseType;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
public class EmployeeWorkflowController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    MawaredService mawaredService;

    @Value("${workflowtoken}")
    private String training_token;

    @PostMapping("/get-employee-head/{id}/{token}")
    public ResponseType getEmployeeHeadOfSection(@PathVariable("id") String id,@PathVariable("token") String token){
        logger.info("Recieved ### " + id);
        if(token!=null && token.equals(training_token)) {
            if (id != null) {
                if (true) { // check the immediate head present
                    List<ImmediateManager> immediateManagers = mawaredService.getImmediateManager(id);
                    // TODO here to check the immediate manager is on vacation
                    // TODO  Get Delegation too and set to the Request
                    logger.info("RESOURCE_CHECKING ###" );
                    if (immediateManagers.size() > 0) {
                        logger.info("RESOURCE_CHECKING ###" + immediateManagers.get(0).getImLegacyCode());
                        return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                                immediateManagers.get(0));
                    } else {
                        logger.info("RESOURCE_NOT_FOUND ###" );
                        return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                                null);
                    }
                } else {
                    logger.info("RESOURCE_NOT_FOUND ###" );
                    return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                            null);
                }
            } else {
                logger.info("RESOURCE_NOT_FOUND ###" );
                return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
            }
        }else{
            logger.info("UNAUTHORIZED ###" );
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }


    @PostMapping("/get-employee-manager/{id}/{token}")
    public ResponseType getEmployeeManager(@PathVariable("id") String id,@PathVariable("token") String token){
        logger.info("Recieved ### " + id);
        if(token!=null && token.equals(training_token)) {
            if (id != null) {
                List<MawaredMaster> masterData = mawaredService.findByLegacyCode(id);
                if (masterData != null && masterData.size() > 0) {
                    List<ImmediateManager> immediateManagers = mawaredService.getDepartmentManager(masterData.get(0).getORGUNIT(), "1-2");
                    if (immediateManagers != null && immediateManagers.size() > 0) {
                        return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                                immediateManagers.get(0));
                    } else {
                        return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                                null);
                    }
                } else {
                    return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                            null);
                }
            } else {
                return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
            }
        }else{
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }

    @PostMapping("/get-head-of-training-and-continuing-edu/{token}")
    public ResponseType getHeadOfTrainingAndContinuingEducation(@PathVariable("token") String token){
        if(token!=null && token.equals(training_token)) {
            logger.info("Recieved ### request received");
            List<ImmediateManager> immediateManagers = mawaredService.getDepartmentManager("10002677", "1-2");
            if (immediateManagers != null && immediateManagers.size() > 0) {
                return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                        immediateManagers.get(0));
            } else {
                return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
            }
        }else{
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }


    @PostMapping(value="/get-legal-head/{token}",consumes= MediaType.APPLICATION_JSON_VALUE)
    ResponseType getLegalManager(@PathVariable("wtoken") String token){
        if(token!=null && token.equals(training_token)) {
            logger.info("Recieved ### request received");
            List<ImmediateManager> immediateManagers = mawaredService.getDepartmentManager("10001727", "1-2");
            if (immediateManagers != null && immediateManagers.size() > 0) {
                return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                        immediateManagers.get(0));
            } else {
                return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
            }
        }else{
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }

    @PostMapping("/check-the-user-is-head-of-training/{id}/{token}")
    public ResponseType checkUserIsHeadOfTraining(@PathVariable("id") String id,@PathVariable("token") String token){
        if(token!=null && token.equals(training_token)) {
            logger.info("Received ### request received");
            List<ImmediateManager> immediateManagers = mawaredService.getDepartmentManager("10002677", "1-1");
            if (immediateManagers != null && immediateManagers.size() > 0) {

                if(immediateManagers.get(0).getLegacyCode().equals(id)){
                    return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                            true);
                }else{
                    return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                            false);
                }
            } else {
                return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
            }
        }else{
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }



    @PostMapping("/check-the-user-is-absent/{id}/{token}")
    public ResponseType checkTheUserIsAbsent(@PathVariable("id") String id,@PathVariable("token") String token){
        if(token!=null && token.equals(training_token)) {
            logger.info("Received ### request received");
            Boolean status = mawaredService.findByQidInDateIn(id, new Date());
            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    status);
        }else{
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }


    @PostMapping("/get-delegation-for-employee/{id}/{token}")
    public ResponseType getDelegationForEmployee(@PathVariable("id") String id,@PathVariable("token") String token){
        if(token!=null && token.equals(training_token)) {
            logger.info("Received ### request received");

            // TODO need to get from the Mawared DB
            List<ImmediateManager> managers = new ArrayList<>();
            ImmediateManager one = new ImmediateManager();
            one.setLegacyCode("4077");
            one.setcNameAr("Sarath Raj");

            ImmediateManager two = new ImmediateManager();
            two.setLegacyCode("591");
            two.setcNameAr("Shahin Olakara");

            ImmediateManager three = new ImmediateManager();
            three.setLegacyCode("4130");
            three.setcNameAr("Ajna");

            managers.add(one);
            managers.add(two);
            managers.add(three);

            // TODO if no delegation ,add admin also for future delegations

            return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                    managers);
        }else{
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }


    @PostMapping("/check-the-user-is-manager/{id}/{did}/{token}")
    ResponseType checkUserIsManager(@PathVariable("id") String id,@PathVariable("did") String did,@PathVariable("token") String token)
    {
        if(token!=null && token.equals(training_token)) {
            logger.info("Received ### request received deptid" + did + "jobid: "+ id);
            List<ImmediateManager> immediateManagers = mawaredService.getDepartmentManager(did, "1-1");
            if (immediateManagers != null && immediateManagers.size() > 0) {
                if(immediateManagers.get(0).getLegacyCode().equals(id)){
                    return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                            true);
                }else{
                    return get(Constants.SUCCESS, MessageUtil.SUCCESS, true,
                            false);
                }
            } else {
                return get(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
            }
        }else{
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }





    ResponseType  get(int code, String message, boolean status, Object data){
        ResponseType response = new ResponseType(code,message, status,
                data);
        return response;
    }


    @PostMapping("/get-employee-by-jobid-workflow/{id}/{token}")
    public ResponseType getEmployeeById(@PathVariable("id") String id,@PathVariable("token") String token){
        logger.info("Recieved ### " + id);
        if(token!=null && token.equals(training_token)) {
            if (id != null) {
                List<MawaredMaster> masterData = mawaredService.findByLegacyCode(id);
                if (masterData != null && masterData.size() > 0) {
                    EmpModel employee = new EmpModel();
                    String email = masterData.get(0).getEMAIL() != null ? masterData.get(0).getEMAIL().replace("MAILTO:", "") : "";
                    employee.setEmail(email);
                    employee.setJobId(masterData.get(0).getLEGACYCODE());
                    employee.setQid(masterData.get(0).getQID());
                    employee.setCnameAr(masterData.get(0).getCNAME_AR());
                    employee.setCnameEn(masterData.get(0).getCNAME_AR());
                    employee.setMobile(masterData.get(0).getMOBILE() != null ? masterData.get(0).getMOBILE() : "");
                    employee.setDepartment(masterData.get(0).getORGUNIT_DESC_AR() != null ? masterData.get(0).getORGUNIT_DESC_AR() : "");
                    employee.setDepartmentId(masterData.get(0).getORGUNIT() != null ? masterData.get(0).getORGUNIT() : "");
                    employee.setJobTitle(masterData.get(0).getPOSITION_DESC_AR() != null ? masterData.get(0).getPOSITION_DESC_AR() : "");
                    employee.setIban(masterData.get(0).getBACNO() != null ? masterData.get(0).getBACNO() : "");
                    logger.info("SUCCESS ### ");
                    ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SYSTEM_USER_CREATED, true,
                            employee);
                    return response;

                } else {
                    logger.info("RESOURCE_NOT_FOUND 1### ");
                    ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                            null);
                    return response;
                }

            } else {
                logger.info("RESOURCE_NOT_FOUND 2### ");
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }
        }else{
            logger.info("UNAUTHORIZED 2### ");
            return get(Constants.UNAUTHORIZED, MessageUtil.FAILED, false,
                    null);
        }
    }

}
