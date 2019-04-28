package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseMaster;

import java.math.BigDecimal;
import java.util.List;

public interface CourseRepository extends PagingAndSortingRepository<TacCourseMaster, BigDecimal> {
	@Query(value="select * from tac_coursemaster where activityId=:activityId",nativeQuery=true)
	List<TacActivity> searchActivity(BigDecimal activityId);
}
