package qa.gov.customs.cis.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.cis.entity.CisCourseRequest;

import java.util.List;

@Repository
public interface CisCourseRequestRepository extends PagingAndSortingRepository<CisCourseRequest, Long> {



        List<CisCourseRequest> findAllByFromUserEquals(String fromUser, Pageable pageable);


        }