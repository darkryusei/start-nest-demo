import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { title } from 'process';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }
  @Post()
  postTodo(@Body('title') title: string, @Body('subtitle') subtitle: string) {
    this.todoService.addTodo(title, subtitle);
  }
  @Post('/:id/test')
  postTodo2(
    @Body('title') title: string,
    @Body('subtitle') subtitle: string,
    @Param('id') id: string,
  ) {
    return `title: ${title}, subtitle: ${subtitle}, id: ${id}`;
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.removeTodoById(id);
  }
}
