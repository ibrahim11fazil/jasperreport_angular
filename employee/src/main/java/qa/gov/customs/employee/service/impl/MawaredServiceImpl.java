package qa.gov.customs.employee.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import qa.gov.customs.employee.entity.MawaredMaster;
import qa.gov.customs.employee.repository.MawaredRepository;
import qa.gov.customs.employee.service.MawaredService;

import java.util.List;

@Service
public class MawaredServiceImpl implements MawaredService {

    @Autowired
    MawaredRepository mawaredRepository;

    @Override
    public List<MawaredMaster> findByLegacyCode(String jobCode) {
        return mawaredRepository.findByLegacyCode(jobCode);
    }

    @Override
    public List<MawaredMaster> findByEmail(String email) {
        return mawaredRepository.findByEmail(email);
    }
}
