"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/common/http");
// Import the Animations module
var animations_1 = require("@angular/platform-browser/animations");
// Import  Kendo Modules
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var kendo_angular_dialog_1 = require("@progress/kendo-angular-dialog");
var kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
var kendo_angular_ripple_1 = require("@progress/kendo-angular-ripple");
var kendo_angular_treeview_1 = require("@progress/kendo-angular-treeview");
var kendo_angular_gauges_1 = require("@progress/kendo-angular-gauges");
var kendo_angular_charts_1 = require("@progress/kendo-angular-charts");
var kendo_angular_excel_export_1 = require("@progress/kendo-angular-excel-export");
var app_component_1 = require("./app.component");
var edit_services_1 = require("../services/edit.services");
var stock_data_services_1 = require("../services/stock-data.services");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                http_2.HttpClientJsonpModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_grid_1.GridModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                kendo_angular_dialog_1.DialogModule,
                kendo_angular_layout_1.LayoutModule,
                kendo_angular_ripple_1.RippleModule,
                kendo_angular_treeview_1.TreeViewModule,
                kendo_angular_gauges_1.GaugesModule,
                kendo_angular_charts_1.StockChartModule,
                kendo_angular_excel_export_1.ExcelExportModule
            ],
            providers: [
                edit_services_1.EditService,
                stock_data_services_1.StockDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map