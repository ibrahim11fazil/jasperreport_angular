//package qa.gov.customs.training.service.impl;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.data.domain.Sort;
//import org.springframework.stereotype.Service;
//import qa.gov.customs.training.entity.EmployeeCaseDetails;
//import qa.gov.customs.training.repository.EmployeeCaseDetailsRepository;
//import qa.gov.customs.training.service.CisService;
//
//import java.math.BigDecimal;
//import java.math.BigInteger;
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class CisServiceImpl implements CisService {
//
//    @Autowired
//    EmployeeCaseDetailsRepository cisRepository;
//
//    @Override
//    public List<EmployeeCaseDetails> findAllByIdContainingOrJobCodeContaining(Long id, String jobCode, int page, int limit) {
//        List<EmployeeCaseDetails> users =  new ArrayList<>();
//        Pageable pageable =
//                PageRequest.of(
//                        page, limit, Sort.by("id"));
//        if(id==0L && jobCode==""){
//            Page<EmployeeCaseDetails> pages = cisRepository.findAll(pageable);
//            pages.forEach(item ->users.add(item));
//            return users;
//        }else if(id==0L && jobCode!="") {
//            return cisRepository.findAllByJobCodeContaining(jobCode, pageable);
//        }
//        else if(id!=0L && jobCode=="") {
//            return cisRepository.findAllById(id.longValue(), pageable);
//        }
//        else {
//            return cisRepository.findAllByIdOrJobCodeContaining(id.longValue(), jobCode, pageable);
//        }
//    }
//}
