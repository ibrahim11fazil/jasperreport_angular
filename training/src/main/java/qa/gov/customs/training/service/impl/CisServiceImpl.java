package qa.gov.customs.training.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import qa.gov.customs.training.entity.EmployeeCaseDetails;
import qa.gov.customs.training.repository.EmployeeCaseDetailsRepository;
import qa.gov.customs.training.service.CisService;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
public class CisServiceImpl implements CisService {

    @Autowired
    EmployeeCaseDetailsRepository cisRepository;

    @Override
    public List<EmployeeCaseDetails> findAllByIdContainingOrJobCodeContaining(BigInteger id, String jobCode, int page, int limit) {
        List<EmployeeCaseDetails> users =  new ArrayList<>();
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("id"));
        if(id==new BigInteger("0") && jobCode==""){
            Page<EmployeeCaseDetails> pages = cisRepository.findAll(pageable);
            pages.forEach(item ->users.add(item));
            return users;
        }else {
            return cisRepository.findAllByIdContainingOrJobCodeContaining(id, jobCode, pageable);
        }
    }
}
