import {all, call} from 'redux-saga/effects';
import quote from './quote';

export default function* rootSaga() {
  yield all([
    call(quote),
  ]);
}