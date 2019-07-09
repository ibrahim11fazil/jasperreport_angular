package qa.gov.customs.employee.service;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.utils.models.MawaredJobs;

import java.util.List;

public interface MawaredService {

    List<MawaredMaster> findByLegacyCode(String jobCode);
    List<MawaredMaster> findByEmail(String email);
    List<MawaredJobs> listJobs();
    
}
