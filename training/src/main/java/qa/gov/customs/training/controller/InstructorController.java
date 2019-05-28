
package qa.gov.customs.training.controller;
import java.math.BigDecimal;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Slice;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RestController;

import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.entity.TacCourseInstructor;
import qa.gov.customs.training.entity.TacCourseMaster;
import qa.gov.customs.training.entity.TacInstructorMaster;
import qa.gov.customs.training.service.ActivityService;
import qa.gov.customs.training.service.InstructorService;
import qa.gov.customs.utils.Constants;
import qa.gov.customs.utils.MessageUtil;
import qa.gov.customs.utils.models.ResponseType;

@RestController
public class InstructorController {
	
/*	@Autowired
	InstructorService instructorService;

	    @PreAuthorize("hasAnyAuthority('create_instructor')")
		@PostMapping("/create-instructor")
		public ResponseType createInstructor(@RequestBody TacInstructorMaster instructor) {
			TacInstructorMaster submitInstructor=null;
			try {
				submitInstructor = instructorService.createInstructor(instructor);
				ResponseType response = new ResponseType(201, MessageUtil.INSTRUCTOR_CREATED, true, submitInstructor);
				return response;
			}catch (Exception e){
				ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.INSTRUCTOR_CREATION_FAILED, false, null);
				return response;
			}

}
}*/

@Autowired
InstructorService instructorService;

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
public ResponseType countinstrucors() {
	long countinstructor = instructorService.countInstructors();
	ResponseType response = new ResponseType(Constants.SUCCESS, "", true, countinstructor);
	return response;

}

@PreAuthorize("hasAnyAuthority('list_instructors')")
@GetMapping("/list-instructors")
public ResponseType listinstructors() {
	List<TacInstructorMaster> instructorList = null;
	instructorList = instructorService.listinstructors();
	if(instructorList!=null)
	{
	ResponseType response = new ResponseType(Constants.SUCCESS, "", true, instructorList);
	return response;
	}
	else
	{
		ResponseType response = new ResponseType(Constants.SUCCESS, "", false, null);
		return response;
	}
}

	//@PreAuthorize("hasAnyAuthority('train_admin','role_user')")
    
   
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
        /*	instructorList = instructorService.searchinstructor(instructor);
            
            if (instructorList.size()==0) 
            {
                try
                {
                    instructorService.deleteinstructor(instructor);
                }catch (Exception e)
                {
                    ResponseType response = new ResponseType(Constants.RESOURCE_NOT_FOUND, MessageUtil.INSTRUCTOR_DELETED_FAILED, false, null);
                    return response;
                }
            }
        
        ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.INSTRUCTOR_DELETED, true, null);
        return response;*/
        	
        	instructorService.deleteinstructor(instructor);
        	ResponseType response = new ResponseType(Constants.SUCCESS, MessageUtil.INSTRUCTOR_DELETED, true, null);
            return response;
    }
   
	ResponseType response = new ResponseType(Constants.BAD_REQUEST, MessageUtil.BAD_REQUEST, false, null);
    return response;

	
}


       
}


