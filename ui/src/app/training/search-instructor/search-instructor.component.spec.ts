import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInstructorComponent } from './search-instructor.component';

describe('SearchInstructorComponent', () => {
  let component: SearchInstructorComponent;
  let fixture: ComponentFixture<SearchInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
