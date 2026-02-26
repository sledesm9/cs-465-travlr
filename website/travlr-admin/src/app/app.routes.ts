import { Routes } from '@angular/router';
import { TripListComponent } from './components/trip-list/trip-list';
import { TripAddComponent } from './components/trip-add/trip-add';
import { TripEditComponent } from './components/trip-edit/trip-edit';
import { LoginComponent } from './components/login/login';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: TripListComponent, canActivate: [authGuard] },
  { path: 'add', component: TripAddComponent, canActivate: [authGuard] },
  { path: 'edit/:code', component: TripEditComponent, canActivate: [authGuard] },

  { path: '**', redirectTo: '' }
];