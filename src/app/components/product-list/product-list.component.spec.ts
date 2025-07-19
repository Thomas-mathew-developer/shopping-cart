import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let productService: jasmine.SpyObj<ProductService>;
  let cartService: jasmine.SpyObj<CartService>;

  const mockProducts: Product[] = [
    {
      id: 1,
      title: 'Test Product 1',
      price: 99.99,
      description: 'Test description',
      category: 'electronics',
      image: 'image.jpg',
      rating: { rate: 4.5, count: 10 }
    },
    {
      id: 2,
      title: 'Test Product 2',
      price: 49.99,
      description: 'Test description',
      category: 'books',
      image: 'image2.jpg',
      rating: { rate: 4.0, count: 8 }
    }
  ];

  beforeEach(async () => {
    const productSpy = jasmine.createSpyObj('ProductService', ['getProducts']);
    const cartSpy = jasmine.createSpyObj('CartService', ['addToCart', 'getCart']);

    productSpy.getProducts.and.returnValue(of(mockProducts));
    cartSpy.getCart.and.returnValue(of([])); // Required because CartComponent uses getCart()

    await TestBed.configureTestingModule({
      imports: [ProductListComponent, HttpClientTestingModule],
      providers: [
        { provide: ProductService, useValue: productSpy },
        { provide: CartService, useValue: cartSpy }
      ]
    }).compileComponents();

    productService = TestBed.inject(ProductService) as jasmine.SpyObj<ProductService>;
    cartService = TestBed.inject(CartService) as jasmine.SpyObj<CartService>;

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load products on init', () => {
    expect(productService.getProducts).toHaveBeenCalled();
    expect(component.products.length).toBe(2);
    expect(component.products).toEqual(mockProducts);
  });

  it('should call addToCart on CartService when addToCart is triggered', () => {
    const product = mockProducts[0];
    component.addToCart(product);
    expect(cartService.addToCart).toHaveBeenCalledWith(product);
  });
});
