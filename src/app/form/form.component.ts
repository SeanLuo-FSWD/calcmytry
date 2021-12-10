import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @ViewChild('f') inputForm: NgForm;
  @ViewChild('itemForm') itemForm: NgForm;

  constructor() {}
  // firstname = '';
  // lastname = '';
  // address = '';
  person = {
    firstname: '',
    lastname: '',
    address: '',
  };
  items = [];

  ngOnInit(): void {}

  onSubmit() {
    this.person['firstname'] = this.inputForm.value.firstname;
    this.person['lastname'] = this.inputForm.value.lastname;
    this.person['address'] = this.inputForm.value.address;
  }

  onSubmitItem() {
    let item_obj = {
      id: uuidv4(),
      fruitType: '',
      qty: 0,
    };
    item_obj.fruitType = this.itemForm.value.fruitType;
    item_obj.qty = this.itemForm.value.qty;
    this.items.push(item_obj);
  }

  onHandleDelete(itemIndex) {
    this.items.splice(itemIndex, 1);
  }
}
