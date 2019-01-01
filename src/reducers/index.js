import { combineReducers } from 'redux'
import authedUser from '../reducers/authedUser'
import users from '../reducers/users'
import questions from '../reducers/questions'

export default combineReducers({
  authedUser,
  users,
  questions
})