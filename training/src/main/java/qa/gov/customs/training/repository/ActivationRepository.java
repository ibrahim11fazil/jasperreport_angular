package qa.gov.customs.training.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacCourseActivation;

import java.math.BigDecimal;

public interface ActivationRepository extends JpaRepository<TacCourseActivation, BigDecimal> {

    @Query(value="select * from Tac_Course_Activation where course_id=:courseId",nativeQuery=true)
    List<TacCourseActivation> findByCourseId(BigDecimal courseId);


}
