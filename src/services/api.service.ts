import { ResponseType, PriceFormParams, UserParams } from "../types/base";
import service from "./api.interceptors";

export const apiMethods = {
  fetchAppEnterPrice: "/rest/V1/AppEnterPrice/", //申請企業權限
  fetchAppVendor: "/rest/V1/AppVendor", //申請供應商權限
  fetchPost: "posts",
  fetchTodoData: (id: number) => `/todos/${id}`,
  fetchAccountInfo: "/rest/V1/getAccountInfo",
  fetchMemberGroupList: "/rest/V1/MemberGroupList",
  fetchJoinMemberGroup: "/rest/V1/JoinMemberGroup",
  fetchGetD360Art: "/rest/V1/getArt",
};

export const postEnterPrice = (params: PriceFormParams) =>
  service.post(apiMethods.fetchAppEnterPrice, { ...params });
export const postAppVendor = (params: PriceFormParams) =>
  service.post(apiMethods.fetchAppVendor, { ...params });
export const getTodoData = (id: number) =>
  service.get(apiMethods.fetchTodoData(id));
export const postUserData = (params: UserParams) =>
  service.post(apiMethods.fetchPost, { ...params });
export const postAccountInfo = (params: any) =>
  service.post(apiMethods.fetchAccountInfo, { ...params });
export const postMemberGroupList = (params: any) =>
  service.post(apiMethods.fetchMemberGroupList, { ...params });
export const postJoinMemberGroup = (params: any) =>
  service.post(apiMethods.fetchJoinMemberGroup, { ...params });
export const postGetD360Art = (params: any) =>
service.post(apiMethods.fetchGetD360Art, { ...params });
