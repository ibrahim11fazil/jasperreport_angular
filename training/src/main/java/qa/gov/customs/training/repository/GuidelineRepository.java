package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacCourseGuidelines;

import java.math.BigDecimal;
import java.util.List;


@Repository
public interface GuidelineRepository extends JpaRepository<TacCourseGuidelines, BigDecimal> {

    @Query(value = "select GUIDELINE_ID,DESCRIPTION  from TAC_COURSE_GUIDELINES where COURSE_ID=:courseId", nativeQuery = true)
    List<Object[]> findGuidelinesByCourseId(BigDecimal courseId);

}
