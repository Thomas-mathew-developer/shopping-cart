import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { CartItemListComponent } from "../cart-item-list/cart-item-list.component";

@Component({
  selector: 'app-cart-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule, AsyncPipe, CartComponent, CartItemListComponent],
  templateUrl: './cart-dialog.component.html',
  styleUrl: './cart-dialog.component.scss'
})
export class CartDialogComponent {
  cartItems$ = this.cartService.getCart();
  total = 0;

  constructor(
    private cartService: CartService,
    private dialogRef: MatDialogRef<CartDialogComponent>
  ) {
    this.cartItems$.subscribe(items => {
      this.total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    });

  }

  close() {
    this.dialogRef.close();
  }
}
