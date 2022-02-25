import { TodoReducerModel,TodoReducerTypes } from "../Types/TodoTypes";

const defaultState: TodoReducerModel = {};

const TodoReducer = (
  state: TodoReducerModel = defaultState,
  action: TodoReducerTypes
): TodoReducerModel => {
  switch (action.type) {
    case "tasks": {
      return {
        ...state,
        tasks: action.tasks,
      };
    }
    case "fetch_task": {
      return {
        ...state,
        fetch_task: action.fetch_task,
      };
    }


    default:
      return state;
  }
};

export default TodoReducer;
