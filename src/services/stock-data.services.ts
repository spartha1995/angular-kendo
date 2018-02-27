import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class StockDataService {
    private url = 'https://demos.telerik.com/kendo-ui/service/StockData';

    constructor(private http: HttpClient) {
    }

    public get(filter?: any): Promise<any[]> {
        return new Promise<any[]>((resolve: Function) => {
            this.http.jsonp(this.url + this.getOptions(filter), 'callback')
                .subscribe(result => resolve(result));
        });
    }

    private getOptions(filter: any): string {
        let params = new HttpParams();

        if (filter) {
            const filters = {
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
    }
}
