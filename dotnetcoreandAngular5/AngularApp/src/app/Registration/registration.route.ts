import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationPageComponent } from './RegistrationPage/registrationPage';
import { RegistrationComponent } from './Registration.component';


const registrationRoute: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent,
    children: [
      { path: '', component: RegistrationPageComponent }
    ]
  }
]


export const registrationRouting: ModuleWithProviders = RouterModule.forRoot(registrationRoute);
