package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.training.entity.TacCourseLocation;


import java.math.BigDecimal;

public interface LocationRepository extends JpaRepository<TacCourseLocation, BigDecimal> {
}
