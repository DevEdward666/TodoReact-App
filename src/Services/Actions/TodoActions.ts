import { Dispatch } from "react";
import TodoAPI from "../API/TodoAPI";
import IServerResponse from "../Interface/IServerResponse";

import { TodoModel,UpdateTodoModel,AddTodoModel } from "../Model/TodoModel";
import { TodoReducerTypes } from "../Types/TodoTypes";

const setTask =
  () =>
  async (dispatch: Dispatch<TodoReducerTypes>) => {
    try {
      dispatch({
        type: "fetch_task",
        fetch_task: true,
      });
      const response: IServerResponse = await TodoAPI.getAlltodolist();

      if (response.success) {
        dispatch({
          type: "tasks",
          tasks: response.data,
        });
      }

      dispatch({
        type: "fetch_task",
        fetch_task: false,
      });
    } catch (error) {
      console.error(`action error`, error);
    }
  };

  const addTask =
  (payload: AddTodoModel) =>
  async (dispatch: Dispatch<TodoReducerTypes>) => {
    try {

      const response: IServerResponse = await TodoAPI.addTask(payload);

    if (response.success) {
        const response: IServerResponse = await TodoAPI.getAlltodolist();

        if (response.success) {
          dispatch({
            type: "tasks",
            tasks: response.data,
          });
        }
      } 
    } catch (error) {
      console.error(`action error`, error);
    }
  };

  const completeTask =
  (payload: UpdateTodoModel) =>
  async (dispatch: Dispatch<TodoReducerTypes>) => {
    try {

      const response: IServerResponse = await TodoAPI.updateTask(payload);
console.log(payload)
    if (response.success) {
        const response: IServerResponse = await TodoAPI.getAlltodolist();

        if (response.success) {
          dispatch({
            type: "tasks",
            tasks: response.data,
          });
        }
      } 
    } catch (error) {
      console.error(`action error`, error);
    }
  };
  const uncheckedTask =
  (payload: UpdateTodoModel) =>
  async (dispatch: Dispatch<TodoReducerTypes>) => {
    try {

      const response: IServerResponse = await TodoAPI.uncheckedTask(payload);
console.log(payload)
    if (response.success) {
        const response: IServerResponse = await TodoAPI.getAlltodolist();

        if (response.success) {
          dispatch({
            type: "tasks",
            tasks: response.data,
          });
        }
      } 
    } catch (error) {
      console.error(`action error`, error);
    }
  };

  export default {
    setTask,
    uncheckedTask,
    addTask,completeTask
  };
  