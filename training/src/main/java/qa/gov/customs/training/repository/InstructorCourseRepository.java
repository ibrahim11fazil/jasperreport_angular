package qa.gov.customs.training.repository;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;

import qa.gov.customs.training.entity.TacCourseInstructor;

public interface InstructorCourseRepository  extends JpaRepository<TacCourseInstructor, BigDecimal>{

}
