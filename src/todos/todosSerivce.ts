import { Todo } from "./todo";

export type TodoCreatingParams = Pick<Todo, "title" | "description">;

export class TodoService {
    public get(id: number): Todo {
        return {
            id,
            title: "Todo Title",
            description: "Todo Description",
            completed: false,
        }
    }
    public create(params: TodoCreatingParams): Todo {
        return {
            id: 1,
            ...params,
            completed: false,
        }
    }
}