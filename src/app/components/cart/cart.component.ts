import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CartItemListComponent } from "../cart-item-list/cart-item-list.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartItems$ = this.cartService.getCart();
  total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems$.subscribe(items => {
      this.total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    });
  }

}
