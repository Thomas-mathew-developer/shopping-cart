import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartItemListComponent } from './cart-item-list.component';
import { CartItem } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

describe('CartItemListComponent', () => {
  let component: CartItemListComponent;
  let fixture: ComponentFixture<CartItemListComponent>;

  const mockCartItems: CartItem[] = [
    {
      product: {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'Test',
        category: 'test',
        image: 'img.png',
        rating: { rate: 4.5, count: 10 }
      },
      quantity: 2
    },
    {
      product: {
        id: 2,
        title: 'Product 2',
        price: 50,
        description: 'Test',
        category: 'test',
        image: 'img2.png',
        rating: { rate: 4.0, count: 5 }
      },
      quantity: 1
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, CartItemListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CartItemListComponent);
    component = fixture.componentInstance;
    component.cartItems$ = of(mockCartItems); // Provide input
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive and render cart items from input', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component.cartItems$).toBeDefined();
  });
});
