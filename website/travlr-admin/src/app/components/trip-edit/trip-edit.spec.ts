import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

import { TripEditComponent } from './trip-edit';
import { TripDataService } from '../../services/trip-data';

describe('TripEdit', () => {
  let component: TripEditComponent;
  let fixture: ComponentFixture<TripEditComponent>;

  const mockTripService = {
    getTrip: () =>
      of({
        code: 'TT01',
        name: 'Mock Reef',
        length: '3 nights / 4 days',
        start: '2026-01-01',
        resort: 'Mock Resort',
        perPerson: '500',
        image: 'images/reef1.jpg',
        description: 'Mock description'
      }),
    updateTrip: () => of({})
  };

  const mockRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => (key === 'code' ? 'TT01' : null)
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripEditComponent],
      providers: [
        provideRouter([]),
        { provide: TripDataService, useValue: mockTripService },
        { provide: ActivatedRoute, useValue: mockRoute }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TripEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
