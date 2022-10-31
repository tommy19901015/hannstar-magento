import { ResponseType } from '../types/base';
import service from './api.interceptors'
export const apiMethods = {
    fetchTodoData: (id:number) => (`/todos/${id}`),
}

export const getTodoData = (id:number) => service.get<ResponseType>(apiMethods.fetchTodoData(id));