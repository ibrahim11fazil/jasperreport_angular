package qa.gov.customs.training.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import qa.gov.customs.training.entity.TacCourseMaster;

import java.math.BigDecimal;

public interface CourseRepository extends PagingAndSortingRepository<TacCourseMaster, BigDecimal> {

}
