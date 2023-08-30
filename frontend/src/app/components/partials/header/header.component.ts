import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  cartQuantity = 0;
  user!: User;

  constructor(
    private cartService: CartService,
    private userService: UserService
  ) {
    cartService.getCartObservable().subscribe((cart) => {
      this.cartQuantity = cart.totalCount;
    });

    userService.userObservable.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.userService.logout();
  }
}
