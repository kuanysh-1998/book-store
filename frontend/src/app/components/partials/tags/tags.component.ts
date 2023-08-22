import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent {
  tags?: Tag[];
  constructor(private bookService: BookService) {
    bookService.getAllTags().subscribe((tags) => {
      this.tags = tags;
      console.log(this.tags);
      
    });
  }
}
