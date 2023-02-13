import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'ws-new-book-info',
  templateUrl: './new-book-info.component.html',
  styleUrls: ['./new-book-info.component.scss'],
})
export class NewBookInfoComponent {
  infoForm = new FormGroup({
    abstract: new FormControl(''),
    author: new FormControl(''),
    cover: new FormControl(''),
    id: new FormControl(''),
    isbn: new FormControl(''),
    numPages: new FormControl(0),
    publisher: new FormControl(''),
    subtitle: new FormControl(''),
    title: new FormControl(''),
  });
  submit() {}
}
