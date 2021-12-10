import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
})
export class OperationsComponent implements OnInit {
  @ViewChild('f') inputForm: NgForm;

  first = '';
  second = '';
  result = 0;

  @Input()
  type = '';

  sign = '';

  constructor() {}

  ngOnInit(): void {
    switch (this.type) {
      case 'add':
        this.sign = '+';
        break;
      case 'substract':
        this.sign = '-';
        break;
      case 'multiply':
        this.sign = '*';
        break;
      case 'divide':
        this.sign = '/';
        break;

      default:
        break;
    }
  }

  onSubmit() {
    this.first = this.inputForm.value.first;
    this.second = this.inputForm.value.second;
    console.log('first : ' + this.first);
    console.log('second : ' + this.second);
    this.calculate();
  }

  calculate() {
    switch (this.type) {
      case 'add':
        this.result = +this.first + +this.second;
        break;
      case 'substract':
        this.result = +this.first - +this.second;
        break;
      case 'multiply':
        this.result = +this.first * +this.second;
        break;
      case 'divide':
        this.result = +this.first / +this.second;
        break;

      default:
        break;
    }
  }
}
