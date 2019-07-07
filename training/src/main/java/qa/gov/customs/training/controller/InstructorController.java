
package qa.gov.customs.training.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import qa.gov.customs.training.entity.TacCommQualifications;
import qa.gov.customs.training.entity.TacCommSubjects;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.service.CourseService;
import qa.gov.customs.training.service.InstructorService;
import qa.gov.customs.training.utils.Constants;
import qa.gov.customs.training.utils.MessageUtil;
import qa.gov.customs.training.utils.models.ResponseType;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.List;

@RestController
public class InstructorController {


	@Autowired
	InstructorService instructorService;

	@Autowired
	CourseService courseService;

	@PreAuthorize("hasAnyAuthority('create_instructor')")
	@PostMapping("/create-instructor")
	public ResponseType createInstructor(@Valid @RequestBody TacInstructorMaster instructor)
	{
		TacInstructorMaster submitInstructor = null;
		if(instructor.getInstructorId()!=new BigDecimal(0))
		{
			ResponseType searchResponse=searchInstructor(instructor);
			if(searchResponse.getData()==null)
			{
				submitInstructor = instructorService.createInstructor(instructor);
				if(submitInstructor!=null)
				{
					ResponseType response = new ResponseType(201, MessageUtil.INSTRUCTOR_CREATED, true, submitInstructor);

					return response;
				}
				else
				{
					System.out.println("inside else block");
					ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.INSTRUCTOR_CREATION_FAILED, false, null);
					System.out.println(MessageUtil.INSTRUCTOR_CREATION_FAILED);
					return response;
				}
			}
		}
		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.DATA_ALREADY_EXISTS, false, null);
		System.out.println(MessageUtil.DATA_ALREADY_EXISTS);
		return response;



	}
	@PreAuthorize("hasAnyAuthority('search_instructor')")
	@PostMapping("/search-instructor")
	public ResponseType searchInstructor(@RequestBody TacInstructorMaster instructor)
	{

		List<TacInstructorMaster> instructorList=null;
		if (instructor.getName()!=null)
		{
			instructorList=instructorService.searchinstructorName(instructor);
			if(instructorList!=null && !instructorList.isEmpty())
			{
				ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.FOUND, true, instructorList);
				return response;
			}
			else
			{
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.NO_DATA_FOUND, false, null);
				return response;
			}
		}

		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
		return response;
	}

	@PreAuthorize("hasAnyAuthority('count_instructor')")
	@GetMapping("/count-instructor")
	public ResponseType countInstructors() {
		long countinstructor = instructorService.countInstructors();
		ResponseType response = new ResponseType(Constants.SUCCESS, "", true, countinstructor);
		return response;

	}

	@PreAuthorize("hasAnyAuthority('list_instructors')")
	@GetMapping("/list-instructors")
	public ResponseType listInstructors() {
		List<TacInstructorMaster> instructorList = null;
		instructorList = instructorService.listinstructors();
		if(instructorList!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, instructorList);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}

	@PreAuthorize("hasAnyAuthority('list_instructors')")
	@PostMapping("/list-instructors-by-name")
	public ResponseType listInstructors(@RequestBody  TacInstructorMaster instructorMaster) {
		List<TacInstructorMaster> instructorList = null;
		instructorList = instructorService.listinstructors(instructorMaster.getName(),instructorMaster.getStart(),instructorMaster.getLimit());
		if(instructorList!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, instructorList);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}

	@PreAuthorize("hasAnyAuthority('get_instructor_by_id')")
	@PostMapping("/get-instructor-by-id")
	public ResponseType getInstructorById(@RequestBody  TacInstructorMaster instructorMaster) {
	    TacInstructorMaster instructorList = null;
		instructorList = instructorService.getInstructorById(instructorMaster.getInstructorId());
		if(instructorList!=null)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, instructorList);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, "", false, null);
			return response;
		}
	}

	@PreAuthorize("hasAnyAuthority('remove_instructor')")
	@PostMapping("/remove-instructor")
	public ResponseType removeInstructor(@RequestBody TacInstructorMaster instructor)
	{
		System.out.println("Remove instructor");
		//   List<TacCourseInstructor> instructorList = null;
		if(instructor==null || instructor.getInstructorId()==null)
		{
			ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.INSTRUCTOR_DELETED_FAILED, false, null);
			return response;
		}
		if (instructor.getInstructorId() != new BigDecimal(0))
		{
			instructorService.deleteinstructor(instructor);
			ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.INSTRUCTOR_DELETED, true, null);
			return response;
		}
		ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
		return response;
	}


	@GetMapping("/list-subjects")
	public ResponseType listSubjects() {
		List<TacCommSubjects> subjets = null;
		subjets = courseService.getAllSubjects();
		if(subjets!=null && subjets.size()>0)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, subjets);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", false, null);
			return response;
		}
	}


	@GetMapping("/list-qualifications")
	public ResponseType listQualifications() {
		List<TacCommQualifications> qualifications = null;
		qualifications = courseService.getAllQualifications();
		if(qualifications!=null && qualifications.size()>0)
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", true, qualifications);
			return response;
		}
		else
		{
			ResponseType response = new ResponseType(Constants.SUCCESS, "", false, null);
			return response;
		}
	}






}


