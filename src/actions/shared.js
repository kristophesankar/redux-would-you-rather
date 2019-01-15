import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { saveAnswerForQuestion, addQuestionForQuestion } from '../actions/questions'
import { saveAnswerForUser, addQuestionForUser } from '../actions/users'
import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = null

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}

export function handleSaveAnswer ({ authedUser, qid, answer }) {
  return (dispatch) => {

    dispatch(saveAnswerForQuestion({authedUser, qid, answer}))
    dispatch(saveAnswerForUser({authedUser, qid, answer}))

    return saveQuestionAnswer({authedUser, qid, answer})
    .catch((error) => {
      console.warn('There was an error', error)
      dispatch(saveAnswerForQuestion({authedUser, qid, answer}))
    })
  }
}

export function handleAddQuestion (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser})
    .then((question) => {
      dispatch(addQuestionForQuestion(question))
      dispatch(addQuestionForUser(question))
    })

  }
}