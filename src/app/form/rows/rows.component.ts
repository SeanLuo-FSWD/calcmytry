import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css'],
})
export class RowsComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  items;

  subtotal = 0;
  total = 0;

  @Output() deleteSelected = new EventEmitter<{
    itemIndex: number;
  }>();

  tax = 0.07;
  taxAmount = 0;

  @Input()
  person;

  constructor() {}

  ngOnInit(): void {
    console.log('zzzzzzzzzzzzzzzzzzzzzzz');
    this.items.forEach((item) => {
      this.calculateAll(item);
    });

    console.log(this.items);
  }

  ngOnChanges() {
    console.log('ngOnChanges called');
    console.log(this.items);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');

    if (this.items.length === 0) {
      this.total = 0;
      this.subtotal = 0;
      this.taxAmount = 0;
    } else {
      this.items.forEach((item) => {
        this.calculateAll(item);
      });
    }

    console.log(this.items);
  }

  calculateAll(item): void {
    let price;
    this.total = 0;
    this.subtotal = 0;

    switch (item.fruitType) {
      case 'Apples':
        price = 0.99;
        break;
      case 'Peaches':
        price = 1.99;
        break;
      case 'Pears':
        price = 2.99;
        break;
      case 'Plums':
        price = 3.99;
        break;
      default:
        price = 0;
        break;
    }

    item['amount'] = item.qty * price;
    item['price'] = price;

    this.calculateTotal();
  }

  calculateTotal() {
    console.log('777777777777777777777');
    console.log(this.items);

    this.items.forEach((item) => {
      this.subtotal += item.amount;
    });

    this.taxAmount = Number((this.subtotal * this.tax).toFixed(2));

    this.subtotal = Number(this.subtotal.toFixed(2));

    this.total = Number((this.subtotal + this.taxAmount).toFixed(2));
  }

  onDelete(index) {
    this.deleteSelected.emit({ itemIndex: index });
  }
}
