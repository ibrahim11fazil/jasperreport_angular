package qa.gov.customs.training.controller;

import java.math.BigDecimal;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

@RestController
public class CourseController {

    @Autowired
    CourseService courseService;
    
//	@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
    //for creating and updating courses
	@PostMapping("/create-course")
	public ResponseType createUpdateCourse(@RequestBody TacCourseMaster course) {
		TacCourseMaster courses=null;
		
		
		courses=courseService.createAndUpdateCourse(course);
		
		ResponseType response = new ResponseType(201, MessageUtil.COURSE_CREATED, true,courses);
		return response;
	}

}
