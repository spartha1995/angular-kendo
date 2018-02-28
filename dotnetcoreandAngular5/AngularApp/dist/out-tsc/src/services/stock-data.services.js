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
var http_1 = require("@angular/common/http");
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
//# sourceMappingURL=stock-data.services.js.map