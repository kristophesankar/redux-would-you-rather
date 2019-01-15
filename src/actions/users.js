export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_ANSWER_U = 'ADD_QUESTION_ANSWER_U'
export const ADD_QUESTION_U = 'ADD_QUESTION_U'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addQuestionForUser (question) {
  return {
    type: ADD_QUESTION_U,
    question
  }
}

export function saveAnswerForUser (authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER_U,
    authedUser,
    qid,
    answer
  }
}