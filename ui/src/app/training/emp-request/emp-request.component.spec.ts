import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRequestComponent } from './emp-request.component';

describe('EmpRequestComponent', () => {
  let component: EmpRequestComponent;
  let fixture: ComponentFixture<EmpRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
