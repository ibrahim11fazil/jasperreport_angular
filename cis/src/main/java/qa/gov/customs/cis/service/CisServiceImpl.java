package qa.gov.customs.cis.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import qa.gov.customs.cis.entity.CisCourseRequest;
import qa.gov.customs.cis.entity.EmployeeCaseDetails;
import qa.gov.customs.cis.repository.CisCourseRequestRepository;
import qa.gov.customs.cis.repository.EmployeeCaseDetailsRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class CisServiceImpl implements CisService {

    @Autowired
    EmployeeCaseDetailsRepository cisRepository;

    @Autowired
    CisCourseRequestRepository cisCourseRequestRepository;

    @Override
    public List<EmployeeCaseDetails> findAllByIdContainingOrJobCodeContaining(Long id, String jobCode, int page, int limit) {
        List<EmployeeCaseDetails> users =  new ArrayList<>();
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("id"));
        if(id==0L && jobCode==""){
            Page<EmployeeCaseDetails> pages = cisRepository.findAll(pageable);
            pages.forEach(item ->users.add(item));
            return users;
        }else if(id==0L && jobCode!="") {
            return cisRepository.findAllByJobCodeContaining(jobCode, pageable);
        }
        else if(id!=0L && jobCode=="") {
            return cisRepository.findAllById(id.longValue(), pageable);
        }
        else {
            return cisRepository.findAllByIdOrJobCodeContaining(id.longValue(), jobCode, pageable);
        }
    }

    @Override
    public List<CisCourseRequest> findAllByFromUserContaining(String fromUser, int page, int limit) {
        Pageable pageable =
                PageRequest.of(
                        page, limit, Sort.by("requestId"));
        if(fromUser!=null && fromUser!=""){
            List<CisCourseRequest> requests = cisCourseRequestRepository.findAllByFromUserContaining(fromUser,pageable);
            return requests;
        }
        else {
            List<CisCourseRequest> users =  new ArrayList<>();
            return users;
        }
    }
}
