import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from './services/cart.service';
import { of } from 'rxjs';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';

const dialogRefStub = {
  afterClosed: () => of(true),
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;
  let cartServiceSpy: jasmine.SpyObj<CartService>;

  beforeEach(async () => {
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    matDialogSpy.open.and.returnValue(dialogRefStub as any); // 🧠 returns stub

    cartServiceSpy = jasmine.createSpyObj('CartService', ['getCart']);
    cartServiceSpy.getCart.and.returnValue(of([
      {
        product: {
          id: 1,
          title: 'Test Product',
          price: 100,
          description: '',
          category: '',
          image: '',
          rating: { rate: 4.5, count: 200 }
        },
        quantity: 3
      }
    ]));

    await TestBed.configureTestingModule({
  imports: [AppComponent, CartDialogComponent],
  providers: [
    { provide: MatDialog, useValue: matDialogSpy },
    { provide: CartService, useValue: cartServiceSpy }
  ]
}).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'shopping-cart' title`, () => {
    expect(component.title).toEqual('shopping-cart');
  });

  it('should calculate cartCount correctly from service', () => {
    expect(component.cartCount).toBe(3); // quantity is 3 in mock
  });

});
