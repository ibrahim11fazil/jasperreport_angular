import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartProfileComponent } from './smart-profile.component';

describe('SmartProfileComponent', () => {
  let component: SmartProfileComponent;
  let fixture: ComponentFixture<SmartProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
