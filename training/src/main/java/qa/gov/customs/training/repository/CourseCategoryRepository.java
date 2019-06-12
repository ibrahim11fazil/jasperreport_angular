package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacCourseCategory;
import qa.gov.customs.training.entity.TacCourseGuidelines;

import java.math.BigDecimal;


@Repository
public interface CourseCategoryRepository  extends JpaRepository<TacCourseCategory, BigDecimal> {

}