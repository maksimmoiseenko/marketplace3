import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../_services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-client-orders',
  templateUrl: './client-orders.component.html',
  styleUrls: ['./client-orders.component.css']
})
export class ClientOrdersComponent implements OnInit {

  orders: any;
  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url.substring(15));
    this.backendService.getAllClientsOrders(this.router.url.substring(15)).subscribe(data => {
      console.log(data);
      this.orders = data;
    });
  }

  deleteOrder(id: number): void {
    this.backendService.deleteOrder(id).subscribe(() => {
      // @ts-ignore
      this.orders = this.orders.filter(order => order.id !== id);
    });
  }

}
