import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export enum NewBookStep {
  INFO = 'info',
  PRICE = 'price',
}

@Component({
  selector: 'ws-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss'],
})
export class NewBookComponent {
  NewBookStep = NewBookStep;

  step = NewBookStep.INFO;

  selectStep(step: NewBookStep) {
    this.step = step;
  }
}
