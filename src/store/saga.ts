import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_DATA_REQUEST } from "./actionTypes";
import { fetchFailure, fetchSuccess } from "./action";

const getTodos = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos");


function* fetchDataSaga() {
    try {
      const response:[] = yield call(getTodos);
      yield put(
        fetchSuccess({
            infoState: response,
        })
      );
    } catch (e) {
      console.log('Error')
    }
  }

  function* todoSaga() {
    yield all([takeLatest(FETCH_DATA_REQUEST, fetchDataSaga)]);
  }
  
  export default todoSaga;