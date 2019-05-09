package qa.gov.customs.training.repository;



import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;


import qa.gov.customs.training.entity.TacCourseMaster;

import java.math.BigDecimal;
import java.util.List;

public interface CourseRepository extends PagingAndSortingRepository<TacCourseMaster, BigDecimal> {

List<TacCourseMaster> findByActivityId(BigDecimal activityId);
TacCourseMaster findByCourseId(BigDecimal courseId);

List<TacCourseMaster> findByCourseName(String courseName, Pageable firstPageWithThreeElements);
List<TacCourseMaster>findByCourseName(String courseName);




}
