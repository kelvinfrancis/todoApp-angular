import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.html',
  styleUrls: ['../../../styles.css'],
})
export class CreateTodoComponent {
  @Input() inputContent = '';
  @Input() inputCategory = '';

  @Output() inputContentChange = new EventEmitter<string>();
  @Output() inputCategoryChange = new EventEmitter<string>();
  @Output() addTodo = new EventEmitter<void>();

  onInputContentChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.inputContentChange.emit(input.value);
  }
}
