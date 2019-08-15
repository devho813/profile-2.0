import { all, put, fork, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
import { TEST_REQUEST, TEST_SUCCESS } from '../reducers/quote';

function testAPI() {
  // 서버와 api 통신
  // const data = {};
  // return axios.post('/signup', data);
}

function* testRequest() {
  try {
    // yield call(testAPI);
    yield put({
      type: TEST_SUCCESS
    });
  } catch (e) {
    console.log(e);
    // yield put({
    //   type: TEST_FAIRURE
    // });
  }
}

function* watchTestRequest() {
  yield takeLatest(TEST_REQUEST, testRequest);
}

export default function* userSaga() {
  yield all([
    fork(watchTestRequest),
  ])
}