// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { CartDialogComponent } from './cart-dialog.component';
// import { MatDialogRef } from '@angular/material/dialog';
// import { of } from 'rxjs';
// import { CartService } from '../../services/cart.service';

// describe('CartDialogComponent', () => {
//   let component: CartDialogComponent;
//   let fixture: ComponentFixture<CartDialogComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [CartDialogComponent], // Since it's standalone
//       providers: [
//         {
//           provide: MatDialogRef,
//           useValue: {
//             close: jasmine.createSpy('close')
//           }
//         },
//         {
//           provide: CartService,
//           useValue: {
//             getCart: () => of([]) // Provide a mock observable
//           }
//         }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(CartDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
