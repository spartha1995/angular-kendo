webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<span>Angular Kendo Demo</span>\r\n<br />\r\n<span>kendo Button</span>\r\n<br />\r\n<button kendoButton (click)=\"onButtonClick()\" [primary]=\"true\">My Kendo UI Button</button><br /> {{title}}\r\n<br />\r\n<span>Kendo Excel Export</span>\r\n<br />\r\n<button type=\"button\" class=\"k-button\" (click)=\"save(excelexport)\">Export To Excel</button>\r\n\r\n<kendo-excelexport [data]=\"data\" fileName=\"Products.xlsx\" #excelexport>\r\n    <kendo-excelexport-column field=\"ProductID\" title=\"Product ID\">\r\n    </kendo-excelexport-column>\r\n    <kendo-excelexport-column field=\"ProductName\" title=\"Product Name\">\r\n    </kendo-excelexport-column>\r\n</kendo-excelexport>\r\n<br />\r\n<span>Kendo Grid</span>\r\n<br />\r\n<div>\r\n    <kendo-grid #grid [data]=\"view | async\" [height]=\"533\" [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\" [pageable]=\"true\" [sortable]=\"true\" (dataStateChange)=\"onStateChange($event)\" (cellClick)=\"cellClickHandler($event)\" (cellClose)=\"cellCloseHandler($event)\"\r\n                (cancel)=\"cancelHandler($event)\" (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\" (add)=\"addHandler($event)\" [navigable]=\"true\">\r\n        <ng-template kendoGridToolbarTemplate>\r\n            <button kendoGridAddCommand>Add new</button>\r\n            <button class='k-button' [disabled]=\"!editService.hasChanges()\" (click)=\"saveChanges(grid);\">Save Changes</button>\r\n            <button class='k-button' [disabled]=\"!editService.hasChanges()\" (click)=\"cancelChanges(grid);\">Cancel Changes</button>\r\n        </ng-template>\r\n        <kendo-grid-column field=\"ProductName\" title=\"Product Name\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"UnitPrice\" editor=\"numeric\" title=\"Price\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"Discontinued\" editor=\"boolean\" title=\"Discontinued\"></kendo-grid-column>\r\n        <kendo-grid-column field=\"UnitsInStock\" editor=\"numeric\" title=\"Units In Stock\"></kendo-grid-column>\r\n        <kendo-grid-command-column title=\"command\" width=\"220\">\r\n            <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\r\n                <button kendoGridRemoveCommand>Remove</button>\r\n                <button kendoGridSaveCommand>Add</button>\r\n                <button kendoGridCancelCommand>Cancel</button>\r\n            </ng-template>\r\n        </kendo-grid-command-column>\r\n    </kendo-grid>\r\n\r\n</div>\r\n<br />\r\n\r\n<span>Kendo Dialog</span>\r\n<div class=\"example-wrapper\">\r\n    <button kendoButton *ngIf=\"!opened\" (click)=\"open()\">Open dialog</button>\r\n    <kendo-dialog title=\"Please confirm\" *ngIf=\"opened\" (close)=\"close('cancel')\" [minWidth]=\"250\" [width]=\"450\">\r\n        <p style=\"margin: 30px; text-align: center;\">Are you sure you want to continue?</p>\r\n        <kendo-dialog-actions>\r\n            <button kendoButton (click)=\"close('no')\">No</button>\r\n            <button kendoButton (click)=\"close('yes')\" primary=\"true\">Yes</button>\r\n        </kendo-dialog-actions>\r\n    </kendo-dialog>\r\n</div>\r\n\r\n<br />\r\n<br />\r\n<span>kendo PanelBar and Splitter</span>\r\n<div class=\"example-wrapper container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-xs-12 col-sm-12 example-col\">\r\n            <p>Splitter</p>\r\n            <kendo-splitter orientation=\"horizontal\" style=\"height: 360px;\">\r\n                <kendo-splitter-pane size=\"50%\" min=\"40%\">\r\n                    <p>PanelBar</p>\r\n                    <kendo-panelbar>\r\n                        <kendo-panelbar-item title=\"Invasion Games\">\r\n                            <kendo-panelbar-item title=\"Hockey\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Soccer\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Rugby\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Basketball\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Water polo\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Netball\"></kendo-panelbar-item>\r\n                        </kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Striking & Fielding Games\">\r\n                            <kendo-panelbar-item title=\"Cricket\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Softball\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Baseball\"></kendo-panelbar-item>\r\n                        </kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Net & Court Games\" [expanded]=\"true\">\r\n                            <kendo-panelbar-item title=\"Badminton\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Squash\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Tennis\" [selected]=\"true\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Table Tennis\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Volleyball\"></kendo-panelbar-item>\r\n                        </kendo-panelbar-item>\r\n                        <kendo-panelbar-item title=\"Target Games\">\r\n                            <kendo-panelbar-item title=\"Golf\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Lawn bowls\"></kendo-panelbar-item>\r\n                            <kendo-panelbar-item title=\"Tenpin bowling\"></kendo-panelbar-item>\r\n                        </kendo-panelbar-item>\r\n                    </kendo-panelbar>\r\n                </kendo-splitter-pane>\r\n\r\n                <kendo-splitter-pane min=\"40%\">\r\n                    <p>TabStrip</p>\r\n                    <kendo-tabstrip>\r\n                        <kendo-tabstrip-tab [title]=\"'Baseball'\" [selected]=\"true\">\r\n                            <ng-template kendoTabContent>\r\n                                <p>\r\n                                    Baseball is a bat-and-ball game played between two teams of nine players each, who take turns batting and fielding.\r\n                                </p>\r\n                                <p>\r\n                                    The batting team attempts to score runs by hitting a ball that is thrown by the pitcher with a bat swung by the batter, then running counter-clockwise around a series of four bases: first, second, third, and home plate. A run is scored when a player advances\r\n                                    around the bases and returns to home plate.\r\n                                </p>\r\n                            </ng-template>\r\n                        </kendo-tabstrip-tab>\r\n                        <kendo-tabstrip-tab [title]=\"'Basketball'\">\r\n                            <ng-template kendoTabContent>\r\n                                <p>\r\n                                    Basketball is a sport that is played by two teams of five players on a rectangular court. The objective is to shoot a ball through a hoop 18 inches (46 cm) in diameter and mounted at a height of 10 feet (3.048 m) to backboards at each end of the court.\r\n                                    The game was invented in 1891 by Dr. James Naismith, who would be the first basketball coach of the Kansas Jayhawks, one of the most successful programs in the game's history.\r\n                                </p>\r\n                            </ng-template>\r\n                        </kendo-tabstrip-tab>\r\n                        <kendo-tabstrip-tab [title]=\"'Football'\">\r\n                            <ng-template kendoTabContent>\r\n                                <p>\r\n                                    Football is a family of team sports that involve, to varying degrees, kicking a ball with the foot to score a goal. Unqualified, the word football is understood to refer to whichever form of football is the most popular in the regional context in which\r\n                                    the word appears.\r\n                                </p>\r\n                            </ng-template>\r\n                        </kendo-tabstrip-tab>\r\n                    </kendo-tabstrip>\r\n                </kendo-splitter-pane>\r\n            </kendo-splitter>\r\n        </div>\r\n    </div>\r\n</div>\r\n<br />\r\n<br />\r\n<span>Kendo Ripple</span>\r\n<div class=\"example-wrapper\">\r\n\r\n    <div kendoRippleContainer>\r\n        <!-- You can apply this directive to any container element -->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-4 example-col\">\r\n                <p>Ripple on Buttons</p>\r\n                <button class=\"k-button\">Default Button</button><br />\r\n                <button class=\"k-button k-primary\">Primary Button</button><br />\r\n                <button class=\"k-button k-bare\">Bare Button</button>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-4 example-col\">\r\n                <p>Ripple on Checkboxes</p>\r\n                <p style=\"line-height: 2.5em;\">\r\n                    <input type=\"checkbox\" id=\"c1\" class=\"k-checkbox\" />\r\n                    <label class=\"k-checkbox-label\" for=\"c1\">Checkbox 1</label><br />\r\n                    <input type=\"checkbox\" id=\"c2\" class=\"k-checkbox\" />\r\n                    <label class=\"k-checkbox-label\" for=\"c2\">Checkbox 2</label><br />\r\n                    <input type=\"checkbox\" id=\"c3\" class=\"k-checkbox\" />\r\n                    <label class=\"k-checkbox-label\" for=\"c3\">Checkbox 3</label>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-4 example-col\">\r\n                <p>Ripple on Radio Buttons</p>\r\n                <p style=\"line-height: 2.5em;\">\r\n                    <input type=\"radio\" id=\"r1\" name=\"rg\" class=\"k-radio\" checked />\r\n                    <label class=\"k-radio-label\" for=\"r1\">Radio 1</label><br />\r\n                    <input type=\"radio\" id=\"r2\" name=\"rg\" class=\"k-radio\" />\r\n                    <label class=\"k-radio-label\" for=\"r2\">Radio 2</label><br />\r\n                    <input type=\"radio\" id=\"r3\" name=\"rg\" class=\"k-radio\" />\r\n                    <label class=\"k-radio-label\" for=\"r3\">Radio 3</label>\r\n                </p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n<br />\r\n<br />\r\n<span>Kendo TreeView</span>\r\n<kendo-treeview [nodes]=\"data\" textField=\"text\" kendoTreeViewExpandable kendoTreeViewSelectable kendoTreeViewHierarchyBinding childrenField=\"items\">\r\n</kendo-treeview>\r\n<br />\r\n<br />\r\n<span>Kendo Gauges</span>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-2\">\r\n        <kendo-lineargauge #linear [pointer]=\"{ value: value }\">\r\n        </kendo-lineargauge>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-5\">\r\n        <kendo-radialgauge #radial [pointer]=\"{ value: value }\">\r\n        </kendo-radialgauge>\r\n    </div>\r\n    <div class=\"col-sm-12 col-md-5\">\r\n        <kendo-arcgauge #arc [value]=\"value\">\r\n            <ng-template kendoArcGaugeCenterTemplate let-value=\"value\">\r\n                {{ value }}\r\n            </ng-template>\r\n        </kendo-arcgauge>\r\n    </div>\r\n</div>\r\n<br />\r\n<span>Kendo Stock Data</span>\r\n<kendo-stockchart>\r\n    <kendo-chart-title text=\"The Boeing Company\\nNYSE:BA\">\r\n    </kendo-chart-title>\r\n    <kendo-chart-series>\r\n        <kendo-chart-series-item type=\"candlestick\" [data]=\"stockDatata\" openField=\"Open\" closeField=\"Close\" lowField=\"Low\" highField=\"High\" categoryField=\"Date\">\r\n        </kendo-chart-series-item>\r\n    </kendo-chart-series>\r\n    <kendo-chart-navigator>\r\n        <kendo-chart-navigator-select [from]=\"from\" [to]=\"to\">\r\n        </kendo-chart-navigator-select>\r\n        <kendo-chart-navigator-series>\r\n            <kendo-chart-navigator-series-item type=\"area\" [data]=\"stockDatata\" field=\"Close\" categoryField=\"Date\">\r\n            </kendo-chart-navigator-series-item>\r\n        </kendo-chart-navigator-series>\r\n    </kendo-chart-navigator>\r\n</kendo-stockchart>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
//import { Http } from '@angular/http';
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var product_1 = __webpack_require__("./src/model/product.ts");
var edit_services_1 = __webpack_require__("./src/services/edit.services.ts");
var stock_data_services_1 = __webpack_require__("./src/services/stock-data.services.ts");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
__webpack_require__("./node_modules/hammerjs/hammer.js");
var AppComponent = /** @class */ (function () {
    function AppComponent(service, formBuilder, editService, http) {
        var _this = this;
        this.service = service;
        this.formBuilder = formBuilder;
        this.editService = editService;
        this.http = http;
        this.title = 'Angular';
        this.hangfireJobUrl = 'api/HangFireJob';
        this.headers = new http_1.HttpHeaders({ 'Content-Type': 'application/json' });
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.changes = {};
        this.stockDatata = [];
        this.from = new Date('2009/02/05');
        this.to = new Date('2011/10/07');
        this.opened = true;
        this.dataSaved = false;
        this.baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';
        this.data = [
            {
                text: 'Furniture', items: [
                    { text: 'Tables & Chairs' },
                    { text: 'Sofas' },
                    { text: 'Occasional Furniture' }
                ]
            },
            {
                text: 'Decor', items: [
                    { text: 'Bed Linen' },
                    { text: 'Curtains & Blinds' },
                    { text: 'Carpets' }
                ]
            }
        ];
        this.value = 30;
        this.service.get().then(function (data) {
            _this.data = data;
        });
        this.hangfireJobUrl = 'api/HangfireJob';
    }
    AppComponent.prototype.onButtonClick = function () {
        this.http.get(this.hangfireJobUrl, { headers: this.headers });
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.editService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.editService.read();
    };
    AppComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.editService.read();
    };
    AppComponent.prototype.cellClickHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, columnIndex = _a.columnIndex, dataItem = _a.dataItem, isEdited = _a.isEdited;
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    };
    AppComponent.prototype.cellCloseHandler = function (args) {
        var formGroup = args.formGroup, dataItem = args.dataItem;
        if (!formGroup.valid) {
            // prevent closing the edited cell if there are invalid values.
            args.preventDefault();
        }
        else if (formGroup.dirty) {
            this.editService.assignValues(dataItem, formGroup.value);
            this.editService.update(dataItem);
        }
    };
    AppComponent.prototype.addHandler = function (_a) {
        var sender = _a.sender;
        sender.addRow(this.createFormGroup(new product_1.Product()));
    };
    AppComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        sender.closeRow(rowIndex);
    };
    AppComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, formGroup = _a.formGroup, rowIndex = _a.rowIndex;
        if (formGroup.valid) {
            this.editService.create(formGroup.value);
            sender.closeRow(rowIndex);
        }
    };
    AppComponent.prototype.removeHandler = function (_a) {
        var sender = _a.sender, dataItem = _a.dataItem;
        this.editService.remove(dataItem);
        sender.cancelCell();
    };
    AppComponent.prototype.saveChanges = function (grid) {
        grid.closeCell();
        grid.cancelCell();
        this.editService.saveChanges();
    };
    AppComponent.prototype.cancelChanges = function (grid) {
        grid.cancelCell();
        this.editService.cancelChanges();
    };
    AppComponent.prototype.createFormGroup = function (dataItem) {
        return this.formBuilder.group({
            'ProductID': dataItem.ProductID,
            'ProductName': [dataItem.ProductName, forms_1.Validators.required],
            'UnitPrice': dataItem.UnitPrice,
            'UnitsInStock': [dataItem.UnitsInStock, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.pattern('^[0-9]{1,3}')])],
            'Discontinued': dataItem.Discontinued
        });
    };
    AppComponent.prototype.close = function () {
        this.opened = false;
    };
    AppComponent.prototype.open = function () {
        this.opened = true;
    };
    AppComponent.prototype.submit = function () {
        this.dataSaved = true;
        this.close();
    };
    AppComponent.prototype.imageUrl = function (imageName) {
        return this.baseImageUrl + imageName + '.jpg';
    };
    AppComponent.prototype.save = function (component) {
        var options = component.workbookOptions();
        var rows = options.sheets[0].rows;
        var altIdx = 0;
        rows.forEach(function (row) {
            if (row.type === 'data') {
                if (altIdx % 2 !== 0) {
                    row.cells.forEach(function (cell) {
                        cell.background = '#aabbcc';
                    });
                }
                altIdx++;
            }
        });
        component.save(options);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: ["\n        kendo-tabstrip p {\n            margin: 0;\n            padding: 8px;\n        }\n\n        kendo-splitter-pane {\n            padding: 16px;\n        }\n        button, input {\n          margin: 1em 0;\n        }\n        .k-gauge {\n            display: block;\n        }\n    "],
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [stock_data_services_1.StockDataService, forms_1.FormBuilder, edit_services_1.EditService, http_1.HttpClient])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
// Import the Animations module
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
// Import  Kendo Modules
var kendo_angular_buttons_1 = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
var kendo_angular_grid_1 = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
var kendo_angular_dropdowns_1 = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/main.js");
var kendo_angular_dialog_1 = __webpack_require__("./node_modules/@progress/kendo-angular-dialog/dist/es/index.js");
var kendo_angular_layout_1 = __webpack_require__("./node_modules/@progress/kendo-angular-layout/dist/es/main.js");
var kendo_angular_ripple_1 = __webpack_require__("./node_modules/@progress/kendo-angular-ripple/dist/es/index.js");
var kendo_angular_treeview_1 = __webpack_require__("./node_modules/@progress/kendo-angular-treeview/dist/es/index.js");
var kendo_angular_gauges_1 = __webpack_require__("./node_modules/@progress/kendo-angular-gauges/dist/es/index.js");
var kendo_angular_charts_1 = __webpack_require__("./node_modules/@progress/kendo-angular-charts/dist/es/index.js");
var kendo_angular_excel_export_1 = __webpack_require__("./node_modules/@progress/kendo-angular-excel-export/dist/es/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var edit_services_1 = __webpack_require__("./src/services/edit.services.ts");
var stock_data_services_1 = __webpack_require__("./src/services/stock-data.services.ts");
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


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/model/product.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product() {
        this.ProductName = '';
        this.Discontinued = false;
        this.UnitPrice = 0;
    }
    return Product;
}());
exports.Product = Product;


/***/ }),

/***/ "./src/services/edit.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var zip_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/zip.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var itemIndex = function (item, data) {
    for (var idx = 0; idx < data.length; idx++) {
        if (data[idx].ProductID === item.ProductID) {
            return idx;
        }
    }
    return -1;
};
var cloneData = function (data) { return data.map(function (item) { return Object.assign({}, item); }); };
var EditService = /** @class */ (function (_super) {
    __extends(EditService, _super);
    function EditService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        _this.originalData = [];
        _this.createdItems = [];
        _this.updatedItems = [];
        _this.deletedItems = [];
        return _this;
    }
    EditService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .subscribe(function (data) {
            _this.data = data;
            _this.originalData = cloneData(data);
            _super.prototype.next.call(_this, data);
        });
    };
    EditService.prototype.create = function (item) {
        this.createdItems.push(item);
        this.data.unshift(item);
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.update = function (item) {
        if (!this.isNew(item)) {
            var index = itemIndex(item, this.updatedItems);
            if (index !== -1) {
                this.updatedItems.splice(index, 1, item);
            }
            else {
                this.updatedItems.push(item);
            }
        }
        else {
            var index = itemIndex(item, this.createdItems);
            this.createdItems.splice(index, 1, item);
        }
    };
    EditService.prototype.remove = function (item) {
        var index = itemIndex(item, this.data);
        this.data.splice(index, 1);
        index = itemIndex(item, this.createdItems);
        if (index >= 0) {
            this.createdItems.splice(index, 1);
        }
        else {
            this.deletedItems.push(item);
        }
        index = itemIndex(item, this.updatedItems);
        if (index >= 0) {
            this.updatedItems.splice(index, 1);
        }
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.isNew = function (item) {
        return !item.ProductID;
    };
    EditService.prototype.hasChanges = function () {
        return Boolean(this.deletedItems.length || this.updatedItems.length || this.createdItems.length);
    };
    EditService.prototype.saveChanges = function () {
        var _this = this;
        if (!this.hasChanges()) {
            return;
        }
        var completed = [];
        if (this.deletedItems.length) {
            completed.push(this.fetch(REMOVE_ACTION, this.deletedItems));
        }
        if (this.updatedItems.length) {
            completed.push(this.fetch(UPDATE_ACTION, this.updatedItems));
        }
        if (this.createdItems.length) {
            completed.push(this.fetch(CREATE_ACTION, this.createdItems));
        }
        this.reset();
        zip_1.zip.apply(void 0, completed).subscribe(function () { return _this.read(); });
    };
    EditService.prototype.cancelChanges = function () {
        this.reset();
        this.data = this.originalData;
        this.originalData = cloneData(this.originalData);
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.assignValues = function (target, source) {
        Object.assign(target, source);
    };
    EditService.prototype.reset = function () {
        this.data = [];
        this.deletedItems = [];
        this.updatedItems = [];
        this.createdItems = [];
    };
    EditService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        return this.http
            .jsonp("https://demos.telerik.com/kendo-ui/service/Products/" + action + "?" + this.serializeModels(data), 'callback')
            .pipe(map_1.map(function (res) { return res; }));
    };
    EditService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify(data) : '';
    };
    EditService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EditService);
    return EditService;
}(BehaviorSubject_1.BehaviorSubject));
exports.EditService = EditService;


/***/ }),

/***/ "./src/services/stock-data.services.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var StockDataService = /** @class */ (function () {
    function StockDataService(http) {
        this.http = http;
        this.url = 'https://demos.telerik.com/kendo-ui/service/StockData';
    }
    StockDataService.prototype.get = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.jsonp(_this.url + _this.getOptions(filter), 'callback')
                .subscribe(function (result) { return resolve(result); });
        });
    };
    StockDataService.prototype.getOptions = function (filter) {
        var params = new http_1.HttpParams();
        if (filter) {
            var filters = {
                logic: 'and',
                filters: [{
                        field: 'Date',
                        operator: 'gte',
                        value: filter.from
                    }, {
                        field: 'Date',
                        operator: 'lt',
                        value: filter.to
                    }]
            };
            params = params.append('filter', JSON.stringify(filters));
        }
        return params.keys.length ? '&' + params.toString() : '';
    };
    StockDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], StockDataService);
    return StockDataService;
}());
exports.StockDataService = StockDataService;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map