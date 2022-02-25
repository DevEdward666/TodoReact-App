import { GetFetch, PostFetch } from "../../Hooks/UseFetch";
import IServerResponse from "../Interface/IServerResponse";
import {AddTodoModel,UpdateTodoModel} from '../Model/TodoModel'
const API_DEFAULT_ROUTE = `api/task/`;

const getAlltodolist = async (): Promise<IServerResponse> => {
    const response = await GetFetch(
      API_DEFAULT_ROUTE + "getAlltodolist",
    );
    return response;
  };
  const addTask = async (payload: AddTodoModel): Promise<IServerResponse> => {
    const response = await PostFetch(API_DEFAULT_ROUTE + "insertNew", payload);
    return response;
  };
  const updateTask = async (payload: UpdateTodoModel): Promise<IServerResponse> => {
    const response = await PostFetch(API_DEFAULT_ROUTE + "UpdateTask", payload);

    return response;
  };
  const uncheckedTask = async (payload: UpdateTodoModel): Promise<IServerResponse> => {
    const response = await PostFetch(API_DEFAULT_ROUTE + "uncheckedTask", payload);

    return response;
  };

  export default {
    uncheckedTask,
    updateTask,
    addTask,
    getAlltodolist,
  };
  