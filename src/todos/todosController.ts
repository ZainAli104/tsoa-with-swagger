import { Controller, Get, Path, Route } from "tsoa";

import { Todo } from "./todo";
import { TodoService } from "./todosSerivce";

@Route("todos")
export class TodoController extends Controller {
    @Get("{todoId}")
    public async getTodo(
        @Path() todoId: number
    ): Promise<Todo> {
        const todoService = new TodoService();
        return todoService.get(todoId);
    }
}