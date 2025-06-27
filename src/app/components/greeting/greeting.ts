import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.html',
  styleUrls: ['../../../styles.css'],
})
export class GreetingComponent {
  @Input() name = '';
  @Output() nameChange = new EventEmitter<string>();

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.nameChange.emit(input.value);
  }
}
