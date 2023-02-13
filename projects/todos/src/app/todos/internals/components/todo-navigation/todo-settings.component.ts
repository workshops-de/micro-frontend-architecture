import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../models';
import {
  TodoSettings,
  TodoSettingsOptions,
} from '../../../todo-settings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dos-todo-settings',
  template: `
    <h2 mat-dialog-title>Settings</h2>
    <mat-dialog-content *ngIf="settings$ | async as settings">
      <input
        #pollingIntervalInput
        type="number"
        class="todo__input"
        placeholder="What needs to be done?"
        [value]="settings.pollingInterval"
        (change)="updateInterval(pollingIntervalInput.value)"
        (keyup.enter)="updateInterval(pollingIntervalInput.value)"
      />

      <div class="todo">
        <label class="todo__label"
          >Enable Polling
          <input
            #isPollingEnabledInput
            type="checkbox"
            [checked]="settings.isPollingEnabled"
            (change)="togglePolling(isPollingEnabledInput.checked)"
          />
          <span class="todo__checkmark"></span>
        </label>
      </div>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-dialog-close="" class="todo__button--primary">CLOSE</button>
    </mat-dialog-actions>
  `,
})
export class TodoSettingsComponent {
  settings$: Observable<Partial<TodoSettingsOptions>>;

  constructor(private todoSettings: TodoSettings) {
    this.settings$ = todoSettings.settings$;
  }

  togglePolling(checked: boolean) {
    this.todoSettings.update({ isPollingEnabled: checked });
  }

  updateInterval(value: string) {
    this.todoSettings.update({ pollingInterval: Number(value) });
  }
}
