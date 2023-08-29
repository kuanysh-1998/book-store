import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../shared/models/Book';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(
    this.cart
  );

  constructor() {}

  addToCart(book: Book): void {
    let cartItem = this.cart.items.find((item) => item.book.id === book.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(book));
    this.setCartToLocalStorage();
  }

  removeFromCart(bookId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.book.id !== bookId);

    this.setCartToLocalStorage();
  }

  changeQuantity(bookId: string, quantity: number): void {
    let cartItem = this.cart.items.find((cart) => cart.book.id === bookId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.book.price;

    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();

    this.setCartToLocalStorage();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );

    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );

    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);

    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
