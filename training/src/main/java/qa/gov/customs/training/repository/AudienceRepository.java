package qa.gov.customs.training.repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseAudience;

@Repository
public interface AudienceRepository extends JpaRepository<TacCourseAudience,BigDecimal> {

    @Query(value="select * from TAC_COURSE_AUDIENCE where COURSE_ID=:courseId",nativeQuery=true)
    Set<TacCourseAudience> findByCourseId(BigDecimal courseId);
}
