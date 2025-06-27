import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  category: string;
  done: boolean;
  createAt: number;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.html',
  styleUrls: ['../../../styles.css'],
})
export class TodoItemComponent {
  @Input() todo!: Todo;

  @Output() contentChange = new EventEmitter<string>();
  @Output() doneChange = new EventEmitter<boolean>();
  @Output() delete = new EventEmitter<void>();

  onContentChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.contentChange.emit(input.value);
  }

  onDoneChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.doneChange.emit(input.checked);
  }
}
