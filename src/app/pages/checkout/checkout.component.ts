import { Component, OnInit } from '@angular/core';
import {AddAddressComponent} from '../../components/add-address/add-address.component';
import {BackendService} from '../../_services/backend.service';
import {Address} from '../../Models/address';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  form: any = {
    date: null,
    time: null,
    paymentOnline: null,
    cardNumber: null,
    cardDateExpirationMonth: null,
    cardDateExpirationYear: null,
    cvv: null,
    paymentOfflineType: 'cash',
    comment: null
  };
  confirmationPanelIsOpened = false;
  deliveryPanelIsOpened = true;
  paymentPanelIsOpened = false;
  paymentByCardOnline = true;
  newAddressPanel = false;
  addresses: Address[] = [];
  selectedAddress: Address | undefined;
  suggestion: any;
  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.backendService.getSuggestionById(this.router.url.substring(10)).subscribe(data => {
      console.log(data);
      this.suggestion = data;
    });
    this.backendService.getAddressesOfUser().subscribe(data => {
      this.addresses = data;
      console.log(this.addresses);
    });
  }

  clickOnPaymentOnCardOnline(): void {
    this.paymentByCardOnline = true;
  }

  clickOnPaymentOffline(): void {
    this.paymentByCardOnline = false;
  }

  goToFirstPanel(): void {
    this.deliveryPanelIsOpened = true;
    this.paymentPanelIsOpened = false;
    this.confirmationPanelIsOpened = false;
  }

  goToSecondPanel(): void {
    this.deliveryPanelIsOpened = false;
    this.paymentPanelIsOpened = true;
    this.confirmationPanelIsOpened = false;
  }

  goToThirdPanel(): void {
    this.deliveryPanelIsOpened = false;
    this.paymentPanelIsOpened = false;
    this.confirmationPanelIsOpened = true;
  }

  openAddAddressDialog(): void {
    this.newAddressPanel = true;
  }

  closeAddAddressPanel(): void {
    this.newAddressPanel = false;
  }
  saveAddress(form: any): void{
    this.backendService.addAddress(form).subscribe(data => {
      console.log(data);
      this.addresses.push(data);
      this.closeAddAddressPanel();
    });
  }

  selectAddress(address: Address): void {
    this.selectedAddress = address;
    console.log(this.selectedAddress);
  }

  submit(): void {
    this.form.paymentOnline = this.paymentByCardOnline;
    console.log(this.form);
    // @ts-ignore
    this.backendService.addOrder(this.router.url.substring(10), this.form, this.selectedAddress.id).subscribe();
  }
}
