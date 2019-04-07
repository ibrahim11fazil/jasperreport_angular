package qa.gov.customs.workflow.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Qualifier("trainingService")
public class TrainingService {

    @Transactional
    public void testService(){
        System.out.println("Testing 11111");
    }

    @Transactional
    public void testService1(){
        System.out.println("Testing 222222");
    }


    @Transactional
    public void testService2(){
        System.out.println("Testing 33333");
    }

    @Transactional
    public void testService3(){
        System.out.println("Testing 4444444");
    }


}
