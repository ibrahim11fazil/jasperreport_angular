//package qa.gov.customs.workflowcamuda.service;
//
//import org.springframework.beans.factory.annotation.Qualifier;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.stereotype.Component;
//import qa.gov.customs.workflowcamuda.model.UserRequestModel;
//
//@Component
//@Qualifier("beanService")
//public class BeanService {
//    public void hello(){
//        logger.info("Testing");
//    }
//
//
//    public String findManagerForEmployee(UserRequestModel model){
//        return "fatma";
//    }
//
//    public String findHodForEmployee(UserRequestModel model){
//        return "Adel";
//    }
//
//    public void rejectionMail(UserRequestModel model){
//       logger.info("Rejected" + model.getEmail());
//    }
//
//    public void acceptAction(UserRequestModel model){
//        logger.info("Accepted" + model.getEmail());
//    }
//
//}
