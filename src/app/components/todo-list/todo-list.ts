// todo-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo, TodoItemComponent } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  imports: [TodoItemComponent],
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];

  @Output() todoContentChange = new EventEmitter<{index: number, content: string}>();
  @Output() todoDoneChange = new EventEmitter<{index: number, done: boolean}>();
  @Output() todoDelete = new EventEmitter<number>();

  onContentChange(index: number, content: string) {
    this.todoContentChange.emit({ index, content });
  }

  onDoneChange(index: number, done: boolean) {
    this.todoDoneChange.emit({ index, done });
  }

  onDelete(index: number) {
    this.todoDelete.emit(index);
  }
}


// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Todo, TodoItemComponent } from '../todo-item/todo-item';

// @Component({
//   selector: 'app-todo-list',
//   templateUrl: './todo-list.html',
//   styleUrls: ['../../../styles.css'],
//   imports: [TodoItemComponent],
// })
// export class TodoListComponent {
//   @Input() todos: Todo[] = [];

//   @Output() updateTodo = new EventEmitter<{
//     index: number;
//     todo: Partial<Todo>;
//   }>();
//   @Output() removeTodo = new EventEmitter<number>();

//   onContentChange(index: number, value: string) {
//     this.updateTodo.emit({ index, todo: { content: value } });
//   }

//   onDoneChange(index: number, value: boolean) {
//     this.updateTodo.emit({ index, todo: { done: value } });
//   }

//   onDelete(index: number) {
//     this.removeTodo.emit(index);
//   }
// }
