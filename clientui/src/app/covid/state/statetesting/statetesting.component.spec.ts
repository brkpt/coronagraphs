import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatetestingComponent } from './statetesting.component';

describe('StatetestingComponent', () => {
  let component: StatetestingComponent;
  let fixture: ComponentFixture<StatetestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatetestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatetestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
