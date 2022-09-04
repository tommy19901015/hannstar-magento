import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
  } from "./actionTypes";

import { TodoActions } from "./types";

// 定義初始 state
const initialState = {
    memberState:[],
    infoState:[],
    uiState:[],
};



export default (state = initialState , action: TodoActions)  => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
          return {
            ...state,
          };
          case FETCH_DATA_SUCCESS:
            return {
              ...state,
              infoState: action.payload.infoState,
            };
        default:
            return {
            ...state,
        };
    }
}