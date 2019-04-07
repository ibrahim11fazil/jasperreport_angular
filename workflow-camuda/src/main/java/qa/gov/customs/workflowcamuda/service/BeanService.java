package qa.gov.customs.workflowcamuda.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import qa.gov.customs.workflowcamuda.model.UserRequestModel;

@Component
@Qualifier("beanService")
public class BeanService {
    public void hello(){
        System.out.println("Testing");
    }


    public String findManagerForEmployee(UserRequestModel model){
        return "fatma";
    }

    public String findHodForEmployee(UserRequestModel model){
        return "Adel";
    }

    public void rejectionMail(UserRequestModel model){
       System.out.println("Rejected" + model.getEmail());
    }

    public void acceptAction(UserRequestModel model){
        System.out.println("Accepted" + model.getEmail());
    }

}
