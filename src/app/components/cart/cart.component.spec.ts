import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CartComponent } from './cart.component';
import { CartItemListComponent } from '../cart-item-list/cart-item-list.component';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.model';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let mockCartService: jasmine.SpyObj<CartService>;

  const mockCartItems: CartItem[] = [
    {
      product: {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'desc',
        category: 'cat',
        image: 'img.jpg',
        rating: { rate: 4, count: 10 }
      },
      quantity: 2
    },
    {
      product: {
        id: 2,
        title: 'Product 2',
        price: 50,
        description: 'desc',
        category: 'cat',
        image: 'img2.jpg',
        rating: { rate: 4.5, count: 5 }
      },
      quantity: 1
    }
  ];

  beforeEach(async () => {
    mockCartService = jasmine.createSpyObj('CartService', ['getCart']);
    mockCartService.getCart.and.returnValue(of(mockCartItems));

    await TestBed.configureTestingModule({
      imports: [CartComponent, CartItemListComponent],
      providers: [{ provide: CartService, useValue: mockCartService }]
    }).compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the cart component', () => {
    expect(component).toBeTruthy();
  });

  it('should load cart items and calculate total correctly', () => {
    expect(mockCartService.getCart).toHaveBeenCalled();
    expect(component.total).toBe(250); // 100*2 + 50*1
  });
});
