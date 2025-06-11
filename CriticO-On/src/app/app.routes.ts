import { Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { SigninComponent } from './components/Auth/signin/signin.component';
import { PopularesComponent } from './components/populares/populares.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'signin', component: SigninComponent },
    {path: 'home', component: PopularesComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
