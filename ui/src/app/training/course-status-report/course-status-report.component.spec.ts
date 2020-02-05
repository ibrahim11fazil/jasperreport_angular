import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatusReportComponent } from './course-status-report.component';

describe('CourseStatusReportComponent', () => {
  let component: CourseStatusReportComponent;
  let fixture: ComponentFixture<CourseStatusReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseStatusReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
