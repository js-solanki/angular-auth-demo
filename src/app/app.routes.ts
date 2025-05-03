import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardGuard } from './auth-guard.guard';
import { pageLeaveGuard } from './page-leave.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent , canDeactivate: [pageLeaveGuard] },
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    //lazy load component
    { path: "profile", loadComponent: () => import('./profile/profile.component').then(m => m.ProfileComponent), canActivate: [authGuardGuard], },
    { path: "counter", loadComponent: () => import('./counter/counter/counter.component').then(m => m.CounterComponent) },
    { path: "post", loadComponent: () => import('./post/post.component').then(m => m.PostComponent) }
    
];

