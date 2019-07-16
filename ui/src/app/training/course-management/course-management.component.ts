import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  statsCard : any [] = [
  
    {
      card_color : "warn-bg",
      title : "Previous Courses",
     // number : "1,425",
      icon : "assessment"
    },
    {
      card_color : "success-bg",
      title : "Current Courses",
      //number : "6,101",
      icon : "assessment"
    },
    {
      card_color : "accent-bg",
      title : "Future Courses",
      //number : "5,218",
      icon : "new_releases"
    }
  ]
}
