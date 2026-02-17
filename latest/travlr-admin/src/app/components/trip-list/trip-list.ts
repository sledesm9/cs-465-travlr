import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Trip } from '../../trip';
import { TripDataService } from '../../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TripCardComponent],
  templateUrl: './trip-list.html',
  styleUrls: ['./trip-list.css']
})
export class TripListComponent implements OnInit
{
  trips: Trip[] = [];
  loading = true;
  errorMsg = '';
  constructor(private tripService: TripDataService, private router: Router)
  {

  }

  ngOnInit(): void {
    this.tripService
      .getTrips()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data: any) =>
        {
          if (Array.isArray(data))
          {
            this.trips = data;
          }
          else
          {
            this.trips = [];
          }
          console.log('Trips loaded (array?):', Array.isArray(data), data);
          if (!Array.isArray(data)) 
          {
            this.errorMsg = 'API returned non-array.';
          }
        },
        error: (err) => {
          console.error('Trip API error:', err);
          this.errorMsg = 'API call failed. Check console.';
        }
      });
  }

  goEdit(code: string)
  {
    this.router.navigate(['/edit', code]);
  }

  deleteTrip(code: string)
  {
    if (!confirm(`Delete trip ${code}?`))
    {
      return;
    }
    this.tripService.deleteTrip(code).subscribe({
      next: () => this.ngOnInit(),
      error: () => alert('Delete failed')
    });
  }
}
