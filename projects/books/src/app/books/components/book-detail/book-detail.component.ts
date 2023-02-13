import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Book } from '../../models/book';
import { BookApiService } from '../../services/book-api.service';

@Component({
  selector: 'ws-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book$: Observable<Book | undefined> = this.route.params.pipe(
    switchMap((params) => this.service.one(params['isbn']))
  );

  constructor(private route: ActivatedRoute, private service: BookApiService) {}

  ngOnInit(): void {}
}
