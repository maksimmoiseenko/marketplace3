import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../_services/backend.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getAllOrders().subscribe(data => {
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
