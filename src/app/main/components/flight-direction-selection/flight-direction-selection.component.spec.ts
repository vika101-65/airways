import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDirectionSelectionComponent } from './flight-direction-selection.component';

describe('FlightDirectionSelectionComponent', () => {
  let component: FlightDirectionSelectionComponent;
  let fixture: ComponentFixture<FlightDirectionSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightDirectionSelectionComponent]
    });
    fixture = TestBed.createComponent(FlightDirectionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
