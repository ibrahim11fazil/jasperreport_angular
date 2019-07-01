import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationsComponent } from './activations.component';

describe('ActivationsComponent', () => {
  let component: ActivationsComponent;
  let fixture: ComponentFixture<ActivationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
