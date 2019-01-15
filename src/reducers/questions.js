import { RECEIVE_QUESTIONS, ADD_QUESTION_ANSWER_Q, ADD_QUESTION_Q } from '../actions/questions'

export default function questions (state = {}, action ) {
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION_ANSWER_Q:
      const { authedUser, qid, answer } = action.authedUser

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    case ADD_QUESTION_Q:
      const { question } = action
      return {
        ...state,
        [question.id]: question
      }

    default :
      return state
  }
}

