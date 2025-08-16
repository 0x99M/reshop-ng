import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { authGuard } from './guards/auth/auth-guard';
import { DashboardPage } from './components/dashboard-page/dashboard-page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'dashboard', component: DashboardPage, canActivate: [authGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];