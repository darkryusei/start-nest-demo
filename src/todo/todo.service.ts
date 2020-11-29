import { Injectable, NotFoundException } from '@nestjs/common';
import { pathToFileURL } from 'url';
import { Todo } from './todo.entity';
import * as uuid from 'uuid';

@Injectable()
export class TodoService {
  todoArray: Todo[] = [];
  addTodo(title: string, subtitle: string) {
    console.log(`title: ${title}, subtitle: ${subtitle}`);
    const todo = new Todo();
    todo.id = uuid.v4();
    (todo.title = title), (todo.subtitle = subtitle);
    this.todoArray.push(todo);
  }
  getTodos() {
    return this.todoArray;
  }
  removeTodoById(id: string) {
    const found = this.todoArray.find((item) => item.id === id);
    if (!found) {
      throw new NotFoundException(`Todo with ${id} not found`);
    }
    this.todoArray = this.todoArray.filter((item) => item.id !== id);
    return this.todoArray
  }
}
