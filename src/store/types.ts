import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
  } from "./actionTypes";

export interface RequestType {
    type: typeof FETCH_DATA_REQUEST;
}
export interface DataType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

export interface SuccessPayloadType {
    infoState: DataType[];
  }
  
  export interface FailurePayloadType {
    error: string;
  }

export type SuccessType = {
    type: typeof FETCH_DATA_SUCCESS;
    payload: SuccessPayloadType;
  };
  
  export type FailureType = {
    type: typeof FETCH_DATA_FAILURE;
    payload: FailurePayloadType;
  };

// export interface DataType {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
//   }

export type TodoActions =
| RequestType
| SuccessType
| FailureType;