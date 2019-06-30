import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CisCourseRequestsIMadeComponent } from './cis-course-requests-i-made.component';

describe('CisCourseRequestsIMadeComponent', () => {
  let component: CisCourseRequestsIMadeComponent;
  let fixture: ComponentFixture<CisCourseRequestsIMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CisCourseRequestsIMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CisCourseRequestsIMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
