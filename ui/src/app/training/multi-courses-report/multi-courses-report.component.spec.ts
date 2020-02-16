import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCoursesReportComponent } from './multi-courses-report.component';

describe('MultiCoursesReportComponent', () => {
  let component: MultiCoursesReportComponent;
  let fixture: ComponentFixture<MultiCoursesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCoursesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCoursesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
