import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {ProductModelServer, serverResponse} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
// @ts-ignore
import {Router} from "@angular/router";

@Component({
  selector: 'mg-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  products: ProductModelServer[] = [];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: serverResponse) => {
      this.products = prods.products;
    });
  }

  selectProduct(id: number) {
    this.router.navigate(['/product', id]).then();
  }

  AddToCart(id: number) {
    this.cartService.AddProductToCart(id);
  }
}
