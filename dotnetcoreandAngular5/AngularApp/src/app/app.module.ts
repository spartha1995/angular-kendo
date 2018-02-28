import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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


import { AppComponent } from './app.component';

import {EditService} from '../services/edit.services';
import { StockDataService } from '../services/stock-data.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,

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
    ExcelExportModule
  ],
  providers: [
    EditService,
  StockDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
