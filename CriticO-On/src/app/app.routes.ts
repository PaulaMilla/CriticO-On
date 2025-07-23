import { Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/login/login.component';
import { SigninComponent } from './components/Auth/signin/signin.component';
import {HomeComponent} from "./components/home/home.component";
import { ReviewpageComponent } from './components/reviewpage/reviewpage.component';
import { PeliculasGeneroComponent } from './components/peliculas-genero/peliculas-genero.component';
import { ContentinfoComponent } from './components/contentinfo/contentinfo.component';
import {BusquedaComponent} from "./components/busqueda/busqueda.component";

export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'signin', component: SigninComponent },
    { path: 'home', component: HomeComponent},
    { path: 'busqueda', component: BusquedaComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'categoria/:genero', component: PeliculasGeneroComponent },
    { path: 'content/:id/review', component: ReviewpageComponent },
    { path: 'content/:id', component: ContentinfoComponent}
];
