package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacCourseRoom;

import java.math.BigDecimal;
import java.util.List;

public interface CourseRoomRepository extends JpaRepository<TacCourseRoom, BigDecimal> {


    @Query(value="select ROOM_ID,ROOM_NAME  from TAC_COURSE_ROOM where locationId=:locationId",nativeQuery=true)
    List<TacCourseRoom> findByLocationId(BigDecimal locationId);
}
