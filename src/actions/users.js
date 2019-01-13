import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

function saveAnswer (authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

export function handleSaveAnswerUser ({ authedUser, qid, answer }) {
  return (dispatch) => {

    dispatch(saveAnswer({authedUser, qid, answer}))

    return saveQuestionAnswer({authedUser, qid, answer})
    .catch((error) => {
      console.warn('There was an error', error)
      dispatch(saveAnswer({authedUser, qid, answer}))
      alert('There was an error.')
    })
  }
}