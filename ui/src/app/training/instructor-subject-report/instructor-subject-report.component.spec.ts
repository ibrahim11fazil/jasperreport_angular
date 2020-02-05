import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorSubjectReportComponent } from './instructor-subject-report.component';

describe('InstructorSubjectReportComponent', () => {
  let component: InstructorSubjectReportComponent;
  let fixture: ComponentFixture<InstructorSubjectReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorSubjectReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorSubjectReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
