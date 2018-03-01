import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KendoComponentList } from './componentList/kendo-component.component';
import { KendoComponent } from './kendo.component';

const kendoRoutes: Routes = [
  {
    path: 'kendocomponent',
    component: KendoComponent,
    children: [
      { path: '', component: KendoComponentList }
    ]
  }
]


export const kendoRouting: ModuleWithProviders = RouterModule.forRoot(kendoRoutes);
