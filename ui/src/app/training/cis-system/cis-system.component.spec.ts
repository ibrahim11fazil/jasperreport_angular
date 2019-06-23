import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CisSystemComponent } from './cis-system.component';

describe('CisSystemComponent', () => {
  let component: CisSystemComponent;
  let fixture: ComponentFixture<CisSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CisSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CisSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
