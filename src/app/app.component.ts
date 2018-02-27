import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Product } from '../model/product';

import { EditService } from '../services/edit.services';
import { StockDataService } from '../services/stock-data.services';

import { map } from 'rxjs/operators/map';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        kendo-tabstrip p {
            margin: 0;
            padding: 8px;
        }

        kendo-splitter-pane {
            padding: 16px;
        }
        button, input {
          margin: 1em 0;
        }
        .k-gauge {
            display: block;
        }
    `],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Angular';

   onButtonClick() {
        this.title = 'Kendo Button Clicked';
   }

    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    public changes: any = {};
 public stockDatata: any[] = [];
    public from: Date = new Date('2009/02/05');
    public to: Date = new Date('2011/10/07');

    constructor(private service: StockDataService,private formBuilder: FormBuilder,public editService: EditService) {
        this.service.get().then((data) => {
            this.data = data;
        });
    }

    public ngOnInit(): void {
        this.view = this.editService.pipe(map(data => process(data, this.gridState)));

        this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.editService.read();
    }

    public cellClickHandler({ sender, rowIndex, columnIndex, dataItem, isEdited }) {
        if (!isEdited) {
            sender.editCell(rowIndex, columnIndex, this.createFormGroup(dataItem));
        }
    }

    public cellCloseHandler(args: any) {
        const { formGroup, dataItem } = args;

        if (!formGroup.valid) {
             // prevent closing the edited cell if there are invalid values.
            args.preventDefault();
        } else if (formGroup.dirty) {
            this.editService.assignValues(dataItem, formGroup.value);
            this.editService.update(dataItem);
        }
    }

    public addHandler({ sender }) {
        sender.addRow(this.createFormGroup(new Product()));
    }

    public cancelHandler({ sender, rowIndex }) {
        sender.closeRow(rowIndex);
    }

    public saveHandler({ sender, formGroup, rowIndex }) {
        if (formGroup.valid) {
            this.editService.create(formGroup.value);
            sender.closeRow(rowIndex);
        }
    }

    public removeHandler({ sender, dataItem }) {
        this.editService.remove(dataItem);

        sender.cancelCell();
    }

    public saveChanges(grid: any): void {
        grid.closeCell();
        grid.cancelCell();

        this.editService.saveChanges();
    }

    public cancelChanges(grid: any): void {
        grid.cancelCell();

        this.editService.cancelChanges();
    }

    public createFormGroup(dataItem: any): FormGroup {
        return this.formBuilder.group({
            'ProductID': dataItem.ProductID,
            'ProductName': [dataItem.ProductName, Validators.required],
            'UnitPrice': dataItem.UnitPrice,
            'UnitsInStock': [dataItem.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
            'Discontinued': dataItem.Discontinued
        });
    }
  public opened = true;
    public dataSaved = false;

    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    public submit() {
        this.dataSaved = true;
        this.close();
    }
      private baseImageUrl = 'https://demos.telerik.com/kendo-ui/content/web/panelbar/';

  private imageUrl(imageName: string) {
    return this.baseImageUrl + imageName + '.jpg';
  }

  public data: any[] = [
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
      public value = 30;
}
