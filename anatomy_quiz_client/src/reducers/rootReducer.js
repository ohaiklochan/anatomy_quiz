import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer';
import usersReducer from './usersReducer';



const allReducers = combineReducers({
  questions: questionsReducer,
  stats: usersReducer
});

export default allReducers;