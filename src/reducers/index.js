import { combineReducers } from 'redux'
import authedUser from '../reducers/authedUser'
import users from '../reducers/users'
import questions from '../reducers/questions'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer,
})