package qa.gov.customs.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import qa.gov.customs.training.entity.TacActivity;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ActivityRepository extends JpaRepository<TacActivity, BigDecimal> {
    //void save(Optional<TacActivity> activity);
    @Query(value = "select * from Tac_Activity where lower(activity_Name) LIKE %:activityName% order by activity_id", nativeQuery = true)
    List<TacActivity> findByActivityName(String activityName);
}
