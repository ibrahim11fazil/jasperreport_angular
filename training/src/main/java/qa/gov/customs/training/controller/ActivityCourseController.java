package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.service.ActivityCourseService;

@RestController
public class ActivityCourseController {
	
	@Autowired
	ActivityCourseService activityCourseService;
	

}
