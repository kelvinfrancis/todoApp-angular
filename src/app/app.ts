// app.component.ts
import { Component, OnInit } from '@angular/core';
import { GreetingComponent } from "./components/greeting/greeting";
import { CreateTodoComponent } from "./components/create-todo/create-todo";
import { TodoListComponent } from "./components/todo-list/todo-list";

interface Todo {
  id: number;
  content: string;
  category: string;
  done: boolean;
  createAt: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['../styles.css'],
  imports: [GreetingComponent, CreateTodoComponent, TodoListComponent],
})
export class AppComponent implements OnInit {
  name = '';
  inputContent = '';
  inputCategory = '';
  todos: Todo[] = [];

  ngOnInit(): void {
    this.name = localStorage.getItem('name') || '';
    const savedTodos = localStorage.getItem('todos');
    this.todos = savedTodos ? JSON.parse(savedTodos) : [];
  }

  setName(name: string) {
    this.name = name;
    localStorage.setItem('name', name);
  }

  addTodo() {
    if (!this.inputContent.trim() || !this.inputCategory) return;
    this.todos.push({
      id: Date.now(),
      content: this.inputContent,
      category: this.inputCategory,
      done: false,
      createAt: Date.now(),
    });
    this.saveTodos();
    this.inputContent = '';
    this.inputCategory = '';
  }

  updateTodo(index: number, updated: Partial<Todo>) {
    this.todos[index] = { ...this.todos[index], ...updated };
    this.saveTodos();
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  get sortedTodos(): Todo[] {
    return [...this.todos].sort((a, b) => b.createAt - a.createAt);
  }
}

