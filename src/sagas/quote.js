import { all, call, put, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { QUOTE_REQUEST, QUOTE_SUCCESS, QUOTE_FAILURE } from '../modules/quote';

function quoteAPI() {
  return axios.get('https://api.quotable.io/random');
}

function* quoteRequest() {
  try {
    const res = yield call(quoteAPI);
    yield put({
      type: QUOTE_SUCCESS,
      data: res.data
    });
  } catch (e) {
    console.log(e);
    yield put({
      type: QUOTE_FAILURE
    });
  }
}

function* watchQuoteRequest() {
  yield takeLatest(QUOTE_REQUEST, quoteRequest);
}

export default function* userSaga() {
  yield all([
    fork(watchQuoteRequest),
  ])
}