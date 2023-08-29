import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartQuantity = 0;

  constructor(private cartService: CartService) {
    cartService.getCartObservable().subscribe((cart) => {
      this.cartQuantity = cart.totalCount;
    });
  }
}
