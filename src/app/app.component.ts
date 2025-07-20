import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CartService } from './services/cart.service';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';
  cartCount = 0;

  constructor(private cartService: CartService, private dialog: MatDialog) { }

  ngOnInit() {
    this.cartService.getCart().subscribe(items => {
      this.cartCount = items.reduce((acc, item) => acc + item.quantity, 0);
    });
  }

  openCartDialog() {
    this.dialog.open(CartDialogComponent, {
      maxWidth: '500px', // or '90vw' for responsive
      maxHeight: '80vh',
      panelClass: 'custom-dialog-container',
      autoFocus: false
    });
  }

}
