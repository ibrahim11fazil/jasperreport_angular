package qa.gov.customs.training.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacCourseActivation;

import java.math.BigDecimal;
import java.util.List;

public interface ActivationRepository extends JpaRepository<TacCourseActivation, BigDecimal> {

    @Query(value = "select * from Tac_Course_Activation where course_id=:courseId", nativeQuery = true)
    TacCourseActivation findByCourseId(BigDecimal courseId);

    @Query(value = "select date_id from Tac_Course_Activation where course_id=:courseId", nativeQuery = true)
    BigDecimal findDateId(BigDecimal courseId);

    @Query(value = "select room_id from Tac_Course_Activation where course_id=:courseId", nativeQuery = true)
    BigDecimal findRoomId(BigDecimal courseId);

    @Query(value = "from TacCourseActivation  where lower(tacCourseMaster.courseName) LIKE %?1% ")
    List<TacCourseActivation> findAllByCourseNameContaining(String name, Pageable pageable);

    @Query(value="select date_id from Tac_Course_Activation where activation_id=:activationId", nativeQuery = true)
    BigDecimal getDateByActivationId(BigDecimal activationId);
    //@Query(value="Select * from(Select row_.*, rownum rownum_ from (Select * from Tac_Course_Activation where course_Id in (select course_id from Tac_Course_Master where lower(course_Name) LIKE %:name% ) order by activation_Id desc)row_ where rownum <= :limit) where rownum_ > :page",nativeQuery=true)

    //List<Object[]>  findAllByCourseNameContaining(String name,int page,int limit);
    TacCourseActivation findByActivationId(BigDecimal activation);

//    @Query(value="Select a. from Tac_Course_Activation a where a.course_Id in (select b.course_id from Tac_Course_Master b where lower(b.course_Name) LIKE %:name% ) order by a.activation_Id desc",nativeQuery=true)
//    List<TacCourseActivation> findAllByCourseNameContaining(String name);

//    select * from ( select row_.*, rownum rownum_ from (Select * from Tac_Course_Activation where course_Id in (select course_id from Tac_Course_Master where lower(course_Name) LIKE %:name% ) order by activation_Id desc)row_ where rownum <= ?) where rownum_ > ?

}
