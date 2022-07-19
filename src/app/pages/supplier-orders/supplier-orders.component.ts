import { Component, OnInit } from '@angular/core';
import {BackendService} from '../../_services/backend.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-supplier-orders',
  templateUrl: './supplier-orders.component.html',
  styleUrls: ['./supplier-orders.component.css']
})
export class SupplierOrdersComponent implements OnInit {

  orders: any;
  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {
    this.backendService.getAllSupplierOrders(this.router.url.substring(17)).subscribe(data => {
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
