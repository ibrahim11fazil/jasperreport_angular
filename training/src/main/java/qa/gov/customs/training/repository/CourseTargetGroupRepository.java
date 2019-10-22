package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacCourseTargetGroup;

import java.math.BigDecimal;


@Repository
public interface CourseTargetGroupRepository extends JpaRepository<TacCourseTargetGroup, BigDecimal> {

}