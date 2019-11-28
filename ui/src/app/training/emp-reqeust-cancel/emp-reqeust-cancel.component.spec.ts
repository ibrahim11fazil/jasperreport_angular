import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpReqeustCancelComponent } from './emp-reqeust-cancel.component';

describe('EmpReqeustCancelComponent', () => {
  let component: EmpReqeustCancelComponent;
  let fixture: ComponentFixture<EmpReqeustCancelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpReqeustCancelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpReqeustCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
