package qa.gov.customs.training.service;

import qa.gov.customs.training.entity.TacJobcard;
import qa.gov.customs.training.entity.TacJobcardConditions;
import qa.gov.customs.training.entity.TacJobcardDuties;
import qa.gov.customs.training.entity.TacJobcardSkills;
import qa.gov.customs.training.models.JobCardCourseLinkModel;

import java.math.BigDecimal;
import java.util.List;

public interface JobcardService {

    TacJobcard createJobcard(TacJobcard jobcard);

    //	 List<TacJobcard> searchJobcard(TacJobcard jobcard);
    List<TacJobcard> listJobcards(TacJobcard jobcard, int page, int limit);

    List<TacJobcard> listJobcards();

    TacJobcard findByJobcards(BigDecimal jobcardno);

    TacJobcardConditions createJobcardConditions(TacJobcardConditions jobcardConditions);

    List<TacJobcardConditions> searchJobcardConditions(BigDecimal jobcardno);

    void deleteJobcardConditions(TacJobcardConditions jobcardConditions);

    TacJobcardDuties createJobcardDuties(TacJobcardDuties jobcardDuties);

    List<TacJobcardDuties> searchJobcardDuties(BigDecimal jobcardno);

    void deleteJobcardDuties(TacJobcardDuties jobcardDuties);

    TacJobcardSkills CreateJobcardSkills(TacJobcardSkills jobcardSkills);

    List<TacJobcardSkills> searchJobcardSkills(BigDecimal jobcardno);

    void deleteJobcardSkills(TacJobcardSkills jobcardSkills);

    List<JobCardCourseLinkModel> findAllCoursesForJobCard(BigDecimal jobCardNumber);
}
