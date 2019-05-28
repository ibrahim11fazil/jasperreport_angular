package qa.gov.customs.training.repository;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import qa.gov.customs.training.entity.TacCourseGuidelines;


@Repository
public interface GuidelineRepository  extends JpaRepository<TacCourseGuidelines,BigDecimal>{

}
