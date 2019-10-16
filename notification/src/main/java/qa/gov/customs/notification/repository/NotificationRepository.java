package qa.gov.customs.notification.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import qa.gov.customs.notification.entities.Dummy;
import qa.gov.customs.notification.entities.NotificationEntity;

import java.math.BigInteger;

public interface NotificationRepository extends JpaRepository<NotificationEntity, BigInteger>  {
}
