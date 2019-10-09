import { Component, OnInit } from '@angular/core';
import { SearchUser, ISystemInstructorResponseList } from 'app/models/system-user';
import { PAGE_LIMIT } from 'app/app.constants';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TacInstructor } from 'app/models/tac-instructor';
import { TrainingService } from 'app/service/training/training.service';
import { PageTitleService } from 'app/core/page-title/page-title.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'ms-smart-profile',
  templateUrl: './smart-profile.component.html',
  styleUrls: ['./smart-profile.component.scss']
})
export class SmartProfileComponent implements OnInit {

  constructor(
    private trainingService: TrainingService,
    private fb: FormBuilder,
    private pageTitleService: PageTitleService,
    private toastr: ToastrService,
    private router:Router,) {
    this.pageTitleService.setTitle("Smart Profile")
  }

  ngOnInit() {
  }

}
