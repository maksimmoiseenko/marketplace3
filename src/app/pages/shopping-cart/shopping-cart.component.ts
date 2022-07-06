import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../_services/token-storage.service';
import {BackendService} from '../../_services/backend.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  public orders: any = [];
  constructor(private tokenStorageService: TokenStorageService,
              private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getOrdersByClientId(this.tokenStorageService.getUser().id).subscribe(data => {
      this.orders = data;
    });
  }

  deleteOrder(id: number): void {
    this.backendService.deleteOrder(id).subscribe(() => {
      // @ts-ignore
      this.orders = this.orders.filter(order => order.id !== id);
    });
  }
  countSum(): number {
    let sum = 0;
    // @ts-ignore
    this.orders.forEach(order => sum += order.suggestionEntity.price);
    return sum;
  }
}
