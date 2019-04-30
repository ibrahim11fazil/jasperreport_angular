package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.training.service.CourseService;

@RestController
public class CourseController {

    @Autowired
    CourseService courseService;

}
