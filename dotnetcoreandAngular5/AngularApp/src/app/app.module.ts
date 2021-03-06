import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'ng2-select';

// Import  Kendo Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { StockChartModule } from '@progress/kendo-angular-charts';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { InputsModule } from '@progress/kendo-angular-inputs';

import { AppComponent } from './app.component';
import { KendoComponentList } from './kendo-component/componentList/kendo-component.component';
import { KendoComponent } from './kendo-component/kendo.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { RegistrationPageComponent } from './Registration/RegistrationPage/registrationPage';

import { EditService } from '../app/services/edit.services';
import { StockDataService } from '../app/services/stock-data.services';
import { appRouting } from './app.routing';

import { kendoRouting } from './kendo-component/kendo.routes';
import { registrationRouting } from './Registration/registration.route';


@NgModule({
  declarations: [
    AppComponent,
    KendoComponent,
    KendoComponentList,
    RegistrationComponent,
    RegistrationPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    CommonModule,
    RouterModule,
    SelectModule,

    appRouting,
    kendoRouting,
    registrationRouting,

    BrowserAnimationsModule,
    ButtonsModule,
    GridModule,
    DropDownsModule,
    DialogModule,
    LayoutModule,
    RippleModule,
    TreeViewModule,
    GaugesModule,
    StockChartModule,
    ExcelExportModule,
    InputsModule
  ],
  providers: [
    EditService,
    StockDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
