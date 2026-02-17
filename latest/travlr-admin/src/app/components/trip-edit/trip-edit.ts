import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

import { TripDataService } from '../../services/trip-data';
import { Trip } from '../../trip';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './trip-edit.html',
  styleUrls: ['./trip-edit.css']
})
export class TripEditComponent implements OnInit
{
  form!: FormGroup;
  code = '';
  loading = true;
  saving = false;
  errorMsg = '';

  constructor(private fb: FormBuilder,private route: ActivatedRoute,private router: Router,private tripService: TripDataService)
  {

  }

  ngOnInit(): void
  {
    const value = this.route.snapshot.paramMap.get('code');
    if (value !== null && value !== undefined)
    {
      this.code = value;
    }
    else
    {
      this.code = '';
    }
    this.form = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.tripService.getTrip(this.code).subscribe({
      next: (trip) =>
      {
        this.form.patchValue(trip);
        this.loading = false;
      },
      error: (err) =>
      {
        console.error(err);
        this.errorMsg = 'Failed to load trip';
        this.loading = false;
      }
    });
  }

  save(): void
  {
    if (this.form.invalid)
    {
      this.errorMsg = 'Please fill all fields';
      return;
    }
    this.saving = true;
    const updatedTrip = this.form.value as Trip;
    this.tripService.updateTrip(this.code, updatedTrip).subscribe({
      next: () =>
      {
        this.saving = false;
        this.router.navigate(['/']);
      },
      error: (err) =>
      {
        console.error(err);
        this.saving = false;
        this.errorMsg = 'Update failed';
      }
    });
  }
}
