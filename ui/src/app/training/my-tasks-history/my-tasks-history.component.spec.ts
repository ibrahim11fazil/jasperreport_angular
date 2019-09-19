import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTasksHistoryComponent } from './my-tasks-history.component';

describe('MyTasksHistoryComponent', () => {
  let component: MyTasksHistoryComponent;
  let fixture: ComponentFixture<MyTasksHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTasksHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTasksHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
