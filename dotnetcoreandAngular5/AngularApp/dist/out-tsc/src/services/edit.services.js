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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var zip_1 = require("rxjs/observable/zip");
var map_1 = require("rxjs/operators/map");
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
//# sourceMappingURL=edit.services.js.map