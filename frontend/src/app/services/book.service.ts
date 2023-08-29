import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Book } from '../shared/models/Book';
import {
  BOOKS_BY_ID_URL,
  BOOKS_BY_SEARCH_URL,
  BOOKS_BY_TAG_URL,
  BOOKS_TAGS_URL,
  BOOKS_URL,
} from '../shared/constants/urls';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(BOOKS_URL);
  }

  getAllBooksBySearchTerm(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(BOOKS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(BOOKS_TAGS_URL);
  }

  getAllBooksByTag(tag: string): Observable<Book[]> {
    return tag === 'All'
      ? this.getAllBooks()
      : this.http.get<Book[]>(BOOKS_BY_TAG_URL + tag);
  }

  getBookById(bookId: string): Observable<Book> {
    return this.http.get<Book>(BOOKS_BY_ID_URL + bookId).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('An error occurred while fetching the book.');
      })
    );
  }
}
