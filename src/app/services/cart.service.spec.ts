import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';
import { Product } from '../models/product.model';

describe('CartService', () => {
  let service: CartService;

  const mockProduct: Product = {
    id: 1,
    title: 'Test Product',
    price: 100,
    description: 'Sample product',
    category: 'electronics',
    image: 'https://example.com/image.jpg',
    rating: { rate: 4.5, count: 120 }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a product to the cart', (done) => {
    service.addToCart(mockProduct);
    service.getCart().subscribe(items => {
      expect(items.length).toBe(1);
      expect(items[0].product).toEqual(mockProduct);
      expect(items[0].quantity).toBe(1);
      done();
    });
  });

  it('should increase quantity if same product is added again', (done) => {
    service.addToCart(mockProduct);
    service.addToCart(mockProduct);

    service.getCart().subscribe(items => {
      expect(items.length).toBe(1);
      expect(items[0].quantity).toBe(2);
      done();
    });
  });

  it('should calculate total price correctly', () => {
    service.addToCart(mockProduct); // 100
    service.addToCart(mockProduct); // +100
    const total = service.getTotal();
    expect(total).toBe(200);
  });
});
