import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KendoComponentList } from './kendo-component/componentList/kendo-component.component';
import { KendoComponent } from './kendo-component/kendo.component';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { RegistrationPageComponent } from './Registration/RegistrationPage/registrationPage';


const appRoutes: Routes = [
  {
    path: "",
    component: AppComponent
  },
    {
      path: 'kendocomponent',
      component: KendoComponent,
      children: [
        { path: '', component: KendoComponentList }
    ]
  },
    {
      path: 'registration',
      component: RegistrationComponent,
      children: [
        {
          path: '',
          component: RegistrationPageComponent
        }
      ]
    }    

]


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
