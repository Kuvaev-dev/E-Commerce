import {Component, OnInit, Inject} from '@angular/core';
import {CartModelServer} from '../../models/cart.model';
import {CartService} from '../../services/cart.service';
import { UserService } from './../../services/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mg-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // @ts-ignore
  cartData: CartModelServer;
  // @ts-ignore
  cartTotal: Number;
  // @ts-ignore
  subTotal: Number;

  constructor(public cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  ChangeQuantity(id: Number, increaseQuantity: Boolean) {
    this.cartService.UpdateCartData(id, increaseQuantity);
  }

}
