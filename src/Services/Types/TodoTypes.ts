import { TodoModel } from "../Model/TodoModel";

export type TodoReducerTypes =
| {
      type: "tasks";
      tasks: Array<TodoModel>;
    }
| {
      type: "fetch_task";
      fetch_task:boolean;
    }

export interface TodoReducerModel {
  tasks?: Array<TodoModel>;
  fetch_task?: boolean;
}
