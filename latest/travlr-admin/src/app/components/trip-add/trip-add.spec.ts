import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TripAddComponent } from './trip-add';
import { TripDataService } from '../../services/trip-data';
import { of } from 'rxjs';

describe('TripAdd', () =>
{
  let component: TripAddComponent;
  let fixture: ComponentFixture<TripAddComponent>;

  const mockTripService =
  {
    addTrip: () => of({})
  };

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      imports: [TripAddComponent],
      providers:
      [
        provideRouter([]),
        { provide: TripDataService, useValue: mockTripService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TripAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
