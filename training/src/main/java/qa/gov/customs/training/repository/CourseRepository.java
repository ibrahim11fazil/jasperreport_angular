package qa.gov.customs.training.repository;



import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import qa.gov.customs.training.entity.TacCourseMaster;
import java.math.BigDecimal;
import java.util.List;

public interface CourseRepository extends PagingAndSortingRepository<TacCourseMaster, BigDecimal> {

List<TacCourseMaster> findByActivityId(BigDecimal activityId);

TacCourseMaster findByCourseId(BigDecimal courseId);

    @Query(value="select COURSE_ID,COURSE_NAME,ACTIVE_FLAG from Tac_Course_Master where SUBCOURSE_FLAG=1",nativeQuery=true)
    List<Object[]>  findCourseBySubcourseFlag();

//and active_flag=1
@Query(value="select * from Tac_Course_Master where lower(course_name) LIKE %:courseName%  order by course_id",nativeQuery=true)
List<TacCourseMaster> findByCourseName(String courseName, Pageable firstPageWithThreeElements);

List<TacCourseMaster>findByCourseName(String courseName);

//and active_flag=1
@Query(value="select COURSE_ID,COURSE_NAME,ACTIVE_FLAG from Tac_Course_Master where lower(course_name) LIKE %:courseName%  order by course_id",nativeQuery=true)
List<Object[]> findIdAndNameByCourseName(String courseName, Pageable firstPageWithThreeElements);



@Query(value="select COURSE_ID,COURSE_NAME from Tac_Course_Master where active_flag=1 order by course_id",nativeQuery=true)
List<Object[]> findAllCourses();

    @Query(value="select COURSE_ID,COURSE_NAME,NUMBEROFHOURS,CATEGORY_ID from Tac_Course_Master where active_flag=1 order by course_id",nativeQuery=true)
    List<Object[]> findAllCoursesWithHoursAndCategoryId();

@Modifying
@Query(value="update Tac_Course_Master  set active_flag=:flag   where  course_id=:courseId",nativeQuery=true)
void enableOrDisableCourse(BigDecimal courseId , BigDecimal flag);

    @Query(value="select a.course_name,b.course_date,b.end_date,c.activation_id from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE sysdate >=b.course_date and sysdate<=b.end_date and b.status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id "+
            "where sysdate >=b.course_date and sysdate<=b.end_date and b.status=1 and a.course_id=b.course_id ",nativeQuery=true)
    List<Object[]>  getAllCurrentCourses(Pageable pageable);


    @Query(value="select a.course_name,b.course_date,b.end_date,c.activation_id from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE sysdate<b.course_date and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id "+
            "where sysdate<b.course_date and b.status=1 and a.course_id=b.course_id",nativeQuery=true)
    List<Object[]> getAllFutureCourses(Pageable pageable);


    @Query(value="select a.course_name,b.course_date,b.end_date,c.activation_id  from tac_course_master a join tac_course_date b on a.course_id in " +
            "(SELECT b.course_id FROM Tac_course_date b WHERE sysdate>b.end_date and status=1) " +
            "join tac_course_activation c on c.date_id=b.date_id and c.course_id=b.course_id "+
            "where sysdate>b.end_date and b.status=1 and a.course_id=b.course_id",nativeQuery=true)
    List<Object[]> getAllPreviousCourses(Pageable pageable);



}


