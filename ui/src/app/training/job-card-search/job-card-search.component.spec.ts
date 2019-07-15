import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardSearchComponent } from './job-card-search.component';

describe('JobCardSearchComponent', () => {
  let component: JobCardSearchComponent;
  let fixture: ComponentFixture<JobCardSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCardSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
