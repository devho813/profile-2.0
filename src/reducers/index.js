import {combineReducers} from 'redux';
import me from './me';
import project from './project';
import quote from './quote';
import section from './section';

const rootReducer = combineReducers({
  me,
  project,
  quote,
  section
  // 리듀서 추가
})

export default rootReducer;