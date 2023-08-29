import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent {
  book!: Book;

  constructor(
    bookService: BookService,
    private router: Router,
    activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        console.log(params.id);
        bookService.getBookById(params.id).subscribe((book) => {
          this.book = book;
          console.log(this.book);
        });
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.book);
    this.router.navigateByUrl('/cart-page')
  }
}
