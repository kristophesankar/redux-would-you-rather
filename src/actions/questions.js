import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
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

export function handleAddQuestion (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser})
    .then((question) => dispatch(addQuestion(question)))

  }
}

export function handleSaveAnswerQuestion ({ authedUser, qid, answer }) {
  return (dispatch) => {

    dispatch(saveAnswer({authedUser, qid, answer}))

    return saveQuestionAnswer({authedUser, qid, answer})
    .catch((error) => {
      console.warn('There was an error', error)
      dispatch(saveAnswer({authedUser, qid, answer}))
    })
  }
}