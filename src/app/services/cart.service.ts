import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: { product: Product; quantity: number }[] = [];
  private cartSubject = new BehaviorSubject<{ product: Product; quantity: number }[]>([]);

  constructor() { }

  getCart(): Observable<{ product: Product; quantity: number }[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(product: Product) {
    const existing = this.cartItems.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.cartSubject.next(this.cartItems);
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  }
}
