import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Output() onSubmit = new EventEmitter<any>();
  form: any = {
    locality: null,
    street: null,
    houseNumber: null,
    building: null,
    entrance: null,
    floor: null,
    apartment: null,
    firstname: null,
    lastname: null,
    email: null,
    phone: null,
    comment: null
  };
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    this.onSubmit.emit(this.form);
    console.log(this.form);
  }

  closeAddAddressPanel(): void {
    this.onClose.emit();
  }
}
