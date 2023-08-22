import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/shared/models/Book';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      let booksObservable: Observable<Book[]>;

      this.activatedRoute.params.subscribe((params) => {
        if (params.searchTerm)
          booksObservable = this.bookService.getAllBooksBySearchTerm(
            params.searchTerm
          );
          else if (params.tag) booksObservable = this.bookService.getAllBooksByTag(params.tag)
        else booksObservable = this.bookService.getAllBooks();

        booksObservable.subscribe((books) => {
          this.books = books;
        });
      });
    }
  }

  

