package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacCourseAttendence;
import java.math.BigDecimal;
import java.util.Date;

@Repository
public interface TacAttendanceRepository extends JpaRepository<TacCourseAttendence, BigDecimal>  {


    @Query(value="select * from Tac_Course_Attendence where attendees_id=:attendeesId and to_date(ATTENDANCE_DATE,'DD-MM-YY')=to_date(SYSDATE,'DD-MM-YY')",nativeQuery=true)
    TacCourseAttendence findAttendance(BigDecimal attendeesId);
}
