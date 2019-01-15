import { RECEIVE_USERS, ADD_QUESTION_ANSWER_U, ADD_QUESTION_U } from '../actions/users'

export default function users (state = {}, action ) {
  switch(action.type){
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_QUESTION_ANSWER_U:
      const { authedUser, qid, answer } = action.authedUser

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }

    case ADD_QUESTION_U:
      const { question } = action
      return  {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }

    default :
      return state
  }
}