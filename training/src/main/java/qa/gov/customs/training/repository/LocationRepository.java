package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.training.entity.TacCourseLocation;
import qa.gov.customs.training.entity.TacCourseRoom;


import java.math.BigDecimal;
import java.util.List;

public interface LocationRepository extends JpaRepository<TacCourseLocation, BigDecimal> {
    @Query(value="select *  from TAC_COURSE_LOCATION where location_Id=:locationId",nativeQuery=true)
    TacCourseLocation findByLocationId(BigDecimal locationId);

}
