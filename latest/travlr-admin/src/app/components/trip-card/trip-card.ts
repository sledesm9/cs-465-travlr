import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from '../../trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCardComponent
{
  @Input() trip!: Trip;
  @Output() edit = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();

  imgUrl(): string
  {
    return `http://localhost:3000/${this.trip.image}`;
  }

  onEdit()
  {
    this.edit.emit(this.trip.code);
  }

  onDelete()
  {
    this.remove.emit(this.trip.code);
  }
}
