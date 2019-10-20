package qa.gov.customs.employee.controller;

import qa.gov.customs.employee.entity.EmpModel;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.utils.Constants;
import qa.gov.customs.employee.utils.MessageUtil;
import qa.gov.customs.employee.utils.models.ResponseType;

import java.util.List;

public class StaticSupportController {

    static ResponseType getEmpData(List<MawaredMaster> masterData) {
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
            ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.SYSTEM_USER_CREATED, true,
                    employee);
            return response;

        } else {
            ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.FAILED, false,
                    null);
            return response;
        }
    }
}
