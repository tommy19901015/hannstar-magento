import { ResponseType, PriceFormParams, UserParams } from '../types/base';
import service from './api.interceptors';


export const apiMethods = {
    fetchAppEnterPrice:'/rest/V1/AppEnterPrice/',
    fetchPost:'posts',
    fetchTodoData: (id:number) => (`/todos/${id}`),
    fetchAccountInfo:'/rest/V1/getAccountInfo',
    fetchMemberGroupList:'/rest/V1/MemberGroupList',
    fetchJoinMemberGroup:'/rest/V1/JoinMemberGroup',
}


export const postEnterPrice = (params:PriceFormParams) => service.post(apiMethods.fetchAppEnterPrice, {...params});
export const getTodoData = (id:number) => service.get(apiMethods.fetchTodoData(id));
export const postUserData = (params:UserParams) => service.post(apiMethods.fetchPost, {...params});
export const postAccountInfo = (params:any) => service.post(apiMethods.fetchAccountInfo, {...params});
export const postMemberGroupList = (params:any) => service.post(apiMethods.fetchMemberGroupList, {...params});
export const postJoinMemberGroup = (params:any) => service.post(apiMethods.fetchJoinMemberGroup, {...params});