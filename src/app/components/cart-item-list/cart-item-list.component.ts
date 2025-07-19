import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-item-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item-list.component.html'
})
export class CartItemListComponent {
  @Input() cartItems$!: Observable<CartItem[]>;

}
