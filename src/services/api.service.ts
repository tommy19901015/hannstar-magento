import { ResponseType } from '../types/base';
import instance from './api.interceptors'
export const apiMethods = {
    fetchTodoData: (id:number) => (`/todos/${id}`),
}

export const getTodoData = (id:number) => instance.get(apiMethods.fetchTodoData(id));