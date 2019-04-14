package qa.gov.customs.training.Test;

import static org.assertj.core.api.Assertions.assertThat;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import qa.gov.customs.training.entity.TacActivity;
import qa.gov.customs.training.repository.ActivityRepository;

@RunWith(SpringRunner.class)
@SpringBootTest

public class ActivityTest {

	
	   @Autowired
	   ActivityRepository activityRepository;
	   
	   
	   @Test
	   //TODO Create an activity 
	   public void jpaTestCreateActivity()
	   {
		   Date date = new Date();
		   TacActivity activity = new TacActivity();
		   activity.setActivityName("TestCase1");
		   activity.setUserCreated("JayasreeTest");
		   activity.setDateCreated(date);
		   activity.setActive_flag(1);
		
		   
		   activityRepository.save(activity);
		   
//		   Optional<TacActivity> activity1=activityRepository.findById(BigDecimal.valueOf(14));
//		   assertThat(activity1.isPresent()).isEqualTo(true);
//		   System.out.println(activity1.get().getActivityId());
//		   assertThat(activity1.get().getActivityId().equals(BigDecimal.valueOf(14))).isEqualTo(true);
		   
	   }
//	   @Test
//	   //TODO  Update an Activity 
//	   public void jpaTestUpdateActivity()
//	   {
//		   Optional<TacActivity> activity1=activityRepository.findById(BigDecimal.valueOf(10));
//		   activity1.get().setActivityName("Updated Test");
//		   activityRepository.save(activity1);
//		   Optional<TacActivity> activity2=activityRepository.findById(BigDecimal.valueOf(10));
//		   assertThat(activity2.isPresent()).isEqualTo(true);
//		   assertThat(activity2.get().getActivityName()=="UpdatedTest").isEqualTo(true);
//		   
//		   
//	   }
//	   
	   
//	   //TOOD Disable an activity 
//	   @Test
//	   public void jpaTestDisableActivity()
//	   {
//		   Optional<TacActivity> activity1=activityRepository.findById(BigDecimal.valueOf(10));
//		   activity1.get().setAward_flag(0);
//		   activityRepository.save(activity1);
//		   Optional<TacActivity> activity2=activityRepository.findById(BigDecimal.valueOf(10));
//		   assertThat(activity2.isPresent()).isEqualTo(true);
//		   assertThat(activity2.get().getAward_flag()==0).isEqualTo(true);
//		   
//	   }
//	   
	   
	   

//	   @Test
//	   public void jpaTestGetAllActivity()
//	   {
//		 ArrayList< TacActivity> activity=(ArrayList<TacActivity>) activityRepository.findAll();
//		 System.out.println(activity);
//		   assertThat(activity!=null).isEqualTo(true);
//	    }
	   
}
