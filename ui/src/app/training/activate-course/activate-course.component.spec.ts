import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateCourseComponent } from './activate-course.component';

describe('ActivateCourseComponent', () => {
  let component: ActivateCourseComponent;
  let fixture: ComponentFixture<ActivateCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
