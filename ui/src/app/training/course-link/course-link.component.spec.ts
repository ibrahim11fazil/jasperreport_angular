import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLinkComponent } from './course-link.component';

describe('CourseLinkComponent', () => {
  let component: CourseLinkComponent;
  let fixture: ComponentFixture<CourseLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
