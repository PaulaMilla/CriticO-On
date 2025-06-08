import { Routes } from '@angular/router';
import { LoginComponent } from './componentesAuth/login/login.component';
import { SigninComponent } from './componentesAuth/signin/signin.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'signin', component: SigninComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
