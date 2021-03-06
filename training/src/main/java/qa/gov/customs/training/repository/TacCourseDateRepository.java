package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacCourseDate;

import javax.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;

public interface TacCourseDateRepository extends JpaRepository<TacCourseDate, BigDecimal> {

    @Query(value = "select DATE_ID,COURSE_ID,ACTIVITY_ID,COURSE_DATE from TAC_COURSE_DATE where COURSE_ID=:courseId and ACTIVITY_ID=:activityId", nativeQuery = true)
    List<Object[]> findAllDatesByCourseIdAndActivityId(BigDecimal courseId, BigDecimal activityId);

    TacCourseDate findByDateId(BigDecimal dateId);

    @Query(value = "select DATE_ID,COURSE_DATE,END_DATE from TAC_COURSE_DATE where DATE_ID=:dateId ", nativeQuery = true)
    List<Object[]> findStartDateAndEndDateById(BigDecimal dateId);


    @Modifying
    @Transactional
    @Query(value = "update  TAC_COURSE_DATE set STATUS=0,REMARK=:remark where DATE_ID=:date_id", nativeQuery = true)
    void cancelCourse(BigDecimal date_id,String remark);


}
