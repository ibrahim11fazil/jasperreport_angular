package qa.gov.customs.training.Test;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.ArrayList;

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
	   public void jpaTestGetAllActivity()
	   {
		 ArrayList< TacActivity> activity=(ArrayList<TacActivity>) activityRepository.findAll();
		   assertThat(activity!=null).isEqualTo(true);
	    }
	   
}
