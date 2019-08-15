import {combineReducers} from 'redux';
import me from './me';
import project from './project';
import quote from './quote';

const rootReducer = combineReducers({
  me,
  project,
  quote
  // 리듀서 추가
})

export default rootReducer;