import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';



const rootReducer = combineReducers({
  questions: questionsReducer,
  stats: usersReducer
});

export default rootReducer;