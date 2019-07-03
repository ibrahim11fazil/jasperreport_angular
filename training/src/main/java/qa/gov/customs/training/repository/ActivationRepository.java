package qa.gov.customs.training.repository;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacCourseActivation;
import qa.gov.customs.training.entity.TacInstructorMaster;

import java.math.BigDecimal;

public interface ActivationRepository extends JpaRepository<TacCourseActivation, BigDecimal> {

    @Query(value="select * from Tac_Course_Activation where course_id=:courseId",nativeQuery=true)
    TacCourseActivation findByCourseId(BigDecimal courseId);

    @Query(value="select date_id from Tac_Course_Activation where course_id=:courseId",nativeQuery=true)
    BigDecimal findDateId(BigDecimal courseId);

    @Query(value="select room_id from Tac_Course_Activation where course_id=:courseId",nativeQuery=true)
    BigDecimal findRoomId(BigDecimal courseId);

    @Query(value="Select * from Tac_Course_Activation where course_Id in (select course_id from Tac_Course_Master where course_Name=:name ) order by activation_Id desc",nativeQuery=true)
    List<TacCourseActivation> findAllByCourseNameContaining(String name);
   TacCourseActivation findByActivationId(BigDecimal activation);

}
