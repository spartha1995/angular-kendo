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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
//import { Http } from '@angular/http';
var http_1 = require("@angular/common/http");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var product_1 = require("../model/product");
var edit_services_1 = require("../services/edit.services");
var stock_data_services_1 = require("../services/stock-data.services");
var map_1 = require("rxjs/operators/map");
require("hammerjs");
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
            templateUrl: './app.component.html',
            styles: ["\n        kendo-tabstrip p {\n            margin: 0;\n            padding: 8px;\n        }\n\n        kendo-splitter-pane {\n            padding: 16px;\n        }\n        button, input {\n          margin: 1em 0;\n        }\n        .k-gauge {\n            display: block;\n        }\n    "],
            styleUrls: ['./app.component.scss']
        }),
        __metadata("design:paramtypes", [stock_data_services_1.StockDataService, forms_1.FormBuilder, edit_services_1.EditService, http_1.HttpClient])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map