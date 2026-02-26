import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';

import { TripListComponent } from './trip-list';
import { TripDataService } from '../../services/trip-data';

describe('TripListComponent', () => {
  let component: TripListComponent;
  let fixture: ComponentFixture<TripListComponent>;

  const mockTrips = [
    {
      code: 'TT01',
      name: 'Mock Reef',
      length: '3 nights / 4 days',
      start: '2026-01-01',
      resort: 'Mock Resort',
      perPerson: '500',
      image: 'images/reef1.jpg',
      description: 'Mock description'
    }
  ];

  const mockTripService = {
    getTrips: () => of(mockTrips),
    deleteTrip: () => of(void 0)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripListComponent],
      providers: [
        provideRouter([]),
        { provide: TripDataService, useValue: mockTripService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TripListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should load trips from service', () => {
    expect(component.trips.length).toBe(1);
    expect(component.trips[0].name).toBe('Mock Reef');
  });
});
