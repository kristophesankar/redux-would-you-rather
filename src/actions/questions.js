export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER_Q = 'ADD_QUESTION_ANSWER_Q'
export const ADD_QUESTION_Q = 'ADD_QUESTION_Q'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestionForQuestion (question) {
  return {
    type: ADD_QUESTION_Q,
    question
  }
}

export function saveAnswerForQuestion (authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_ANSWER_Q,
    authedUser,
    qid,
    answer
  }
}
