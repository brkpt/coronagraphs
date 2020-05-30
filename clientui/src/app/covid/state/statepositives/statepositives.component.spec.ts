import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatePositivesComponent } from './statepositives.component';

describe('StatePositivesComponent', () => {
  let component: StatePositivesComponent;
  let fixture: ComponentFixture<StatePositivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatePositivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatePositivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
