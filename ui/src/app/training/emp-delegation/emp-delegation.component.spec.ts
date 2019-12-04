import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDelegationComponent } from './emp-delegation.component';

describe('EmpDelegationComponent', () => {
  let component: EmpDelegationComponent;
  let fixture: ComponentFixture<EmpDelegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpDelegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
