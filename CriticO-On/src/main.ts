import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from "@angular/common/http";
import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';


bootstrapApplication(AppComponent, {
  ...appConfig,                          // 🧩 tu configuración existente
  providers: [
    ...(appConfig.providers || []),     // 🔗 mantiene los providers previos
    provideHttpClient()                 // ➕ agrega HttpClient
  ]
}).catch((err) => console.error(err));
