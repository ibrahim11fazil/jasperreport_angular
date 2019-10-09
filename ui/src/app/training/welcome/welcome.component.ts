import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TrainingService } from 'app/service/training/training.service';
import { ToastrService } from 'ngx-toastr';
import { SystemUserService } from 'app/service/user/system-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageTitleService } from 'app/core/page-title/page-title.service';


@Component({
  selector: 'ms-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private modal: NgbModal,
    private trainingService: TrainingService,
    private toastr: ToastrService,
    private userService: SystemUserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pageTitleService: PageTitleService) { }

  ngOnInit() {


  }
  statsCard: any[] = [

    {
      card_color: "accent-bg",
      title: "Attended Courses",
      // number : "1,425",
      icon: "assessment"
    },
    {
      card_color: "success-bg",
      title: " Ongoing Courses",
      //number : "6,101",
      icon: "assignment_return",
    },
    {
      card_color: "warn-bg",
      title: "Request Future Courses",
      //number : "5,218",
      icon: "new_releases"
    },
    {
      card_color: "course-bg",
      title: " Approved Courses",
      //number : "6,101",
      icon: "assignment",
    },
    {
      card_color : "primary-bg",
    title : "Smart Engine Suggestion",
    icon : "remove_red_eye",
  },
  {
    card_color : "brown-bg",
  title : "My Tasks",
  icon : "add_alert",
}
  ]

  getDashboardData(card)

  {
    debugger;
    if(card.title == "Request Future Courses")
    {
      this.router.navigate(["training/emp-request"]);
    }
  }



}
