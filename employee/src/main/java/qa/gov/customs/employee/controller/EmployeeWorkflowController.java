package qa.gov.customs.employee.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.employee.entity.EmpModel;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.service.MawaredService;
import qa.gov.customs.employee.utils.Constants;
import qa.gov.customs.employee.utils.MessageUtil;
import qa.gov.customs.employee.utils.models.ResponseType;

import java.util.List;

@RestController
public class EmployeeWorkflowController {

    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    MawaredService mawaredService;

    @PreAuthorize("hasAnyAuthority('get_employee_head')")
    @PostMapping("/get-employee-head/{id}")
    public ResponseType getEmployeeHeadOfSection(@PathVariable("id") String employeeJobId){
        logger.info("Recieved ### " + employeeJobId);

        if(employeeJobId!=null){
            if(true){ // check the immediate head present

                ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SYSTEM_USER_CREATED, true,
                        employeeJobId);
                return response;

            }else{
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }


        }else{
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

    @PreAuthorize("hasAnyAuthority('get_employee_manager')")
    @PostMapping("/get-employee-manager/{id}")
    public ResponseType getEmployeeManager(@PathVariable("id") String employeeJobId){
        logger.info("Recieved ### " + employeeJobId);

        if(employeeJobId!=null){
            if(true){ // check the immediate head present

                ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SYSTEM_USER_CREATED, true,
                        employeeJobId);
                return response;

            }else{
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }


        }else{
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }

    @PreAuthorize("hasAnyAuthority('get_head_of_training_and_continuing_edu')")
    @PostMapping("/get-head-of-training-and-continuing-edu/{id}")
    public ResponseType getHeadOfTrainingAndContinuningEducation(@PathVariable("id") String employeeJobId){
        logger.info("Recieved ### " + employeeJobId);

        if(employeeJobId!=null){
            if(true){ // check the immediate head present

                ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SYSTEM_USER_CREATED, true,
                        employeeJobId);
                return response;

            }else{
                ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                        null);
                return response;
            }


        }else{
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }


}
