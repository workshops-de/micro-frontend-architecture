import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { Observable } from 'rxjs';
import { BookApiService } from '../../services/book-api.service';

@Component({
  selector: 'ws-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books$: Observable<Book[]> = this.service.all();
  constructor(private service: BookApiService) {}
}
