package qa.gov.customs.notification.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import qa.gov.customs.notification.entities.Dummy;

public interface SmsRepository  extends JpaRepository<Dummy,String> {

     @Query(value = "select FNSEND_SMS(:message,:numberData) from dual",nativeQuery = true)
     void sendSMS(String numberData,String message);
}
