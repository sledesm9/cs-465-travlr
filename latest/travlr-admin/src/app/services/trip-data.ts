import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../trip';

@Injectable
({
  providedIn: 'root'
})
export class TripDataService
{
  private apiBaseUrl = '/api';

  constructor(private http: HttpClient)
  {

  }

  getTrips()
  {
    return this.http.get<any[]>(`${this.apiBaseUrl}/trips`);
  }

  getTrip(code: string): Observable<Trip>
  {
    return this.http.get<Trip>(`${this.apiBaseUrl}/trips/${code}`);
  }

  addTrip(trip: Trip): Observable<Trip>
  {
    return this.http.post<Trip>(`${this.apiBaseUrl}/trips`, trip);
  }

  updateTrip(code: string, trip: Trip): Observable<Trip>
  {
    return this.http.put<Trip>(`${this.apiBaseUrl}/trips/${code}`, trip);
  }

  deleteTrip(code: string): Observable<void>
  {
    return this.http.delete<void>(`${this.apiBaseUrl}/trips/${code}`);
  }
}
