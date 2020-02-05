import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDataReportComponent } from './course-data-report.component';

describe('CourseDataReportComponent', () => {
  let component: CourseDataReportComponent;
  let fixture: ComponentFixture<CourseDataReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDataReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDataReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
