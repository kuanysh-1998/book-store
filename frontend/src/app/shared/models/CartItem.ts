import { Book } from './Book';

export class CartItem {
  constructor(public book: Book) {
    this.book = book;
  }
  quantity: number = 1;
  price: number = this.book.price;
}
