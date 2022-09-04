import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_FAILURE,
    FETCH_DATA_SUCCESS,
  } from "./actionTypes";

  import {
    RequestType,
    SuccessPayloadType,
    FailurePayloadType,
  } from "./types";

  export const fetchDataRequest = (): RequestType => ({
    type: FETCH_DATA_REQUEST,
  });

  export const fetchSuccess = (
    payload: SuccessPayloadType
  ) => ({
    type: FETCH_DATA_SUCCESS,
    payload,
  });
  
  export const fetchFailure = (
    payload: FailurePayloadType
  ) => ({
    type: FETCH_DATA_FAILURE,
    payload,
  });