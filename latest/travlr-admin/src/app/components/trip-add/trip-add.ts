import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';

import { TripDataService } from '../../services/trip-data';
import { Trip } from '../../trip';

@Component({
  selector: 'app-trip-add',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './trip-add.html',
  styleUrls: ['./trip-add.css']
})
export class TripAddComponent
{
  saving = false;
  errorMsg = '';
  form!: FormGroup;

  constructor(private fb: FormBuilder,private tripService: TripDataService,private router: Router)
  {
    this.form = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['images/reef1.jpg', Validators.required],
      description: ['', Validators.required]
    });
  }

  save(): void
  {
    this.errorMsg = '';
    if (this.form.invalid)
    {
      this.errorMsg = 'Please fill all required fields.';
      return;
    }

    this.saving = true;
    const trip = this.form.value as Trip;
    this.tripService.addTrip(trip).subscribe({
      next: () =>
      {
        this.saving = false;
        this.router.navigate(['/']);
      },
      error: (err) =>
      {
        console.error(err);
        this.saving = false;
        this.errorMsg = 'Add failed. Check console.';
      }
    });
  }
}
