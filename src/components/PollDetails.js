import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSaveAnswerQuestion } from '../actions/questions'
import { handleSaveAnswerUser } from '../actions/users'

// details of an individual poll
class PollDetails extends Component{

  // define component state
  state = {
    option: ''
  }

  // set option value when user selects radios

  handleChange = (event) => {
    this.setState({
      option: event.target.value
    })
  }

  // handle voting functionality
  // dispatch actions
  handleVote = (event) => {
    const {dispatch, authedUser, pollId} = this.props
    const answer = this.state.option
    const qid = pollId
    dispatch(handleSaveAnswerQuestion({ authedUser, qid, answer }))
    dispatch(handleSaveAnswerUser({ authedUser, qid, answer }))
  }

  handleSetChoice = () => {
    const { userAnswer } = this.props
    if(userAnswer !== null)
      {this.setState({
        option: this.props.userAnswer
      })
    }
  }

  // set user past choice on component mount
  componentDidMount() {
     this.handleSetChoice()
  }

  // show indivual poll details.
  //user can select options and submit choice
  render(){
    const { user, question } = this.props
    return (
      <div className="center top-10">
        <div className="poll-card">
          <div className="poll-user"><h4>{user.name} asks:</h4></div>
          <div className="left">
            <img className="poll-card-avatar" alt={user.avatarURL} src={user.avatarURL} />
          </div>
          <div className="right">
            <b>Would You Rather...</b>
            <br/>
            <br/>
            <form>
            <input
              type="radio"
              checked={this.state.option === "optionOne"}
              name="options"
              value="optionOne"
              onChange={this.handleChange} /> {question.optionOne.text}<br />
            <input
              type="radio"
              checked={this.state.option === "optionTwo"}
              name="options"
              value="optionTwo"
              onChange={this.handleChange}/> {question.optionTwo.text}<br />
            <br />
            </form>
          </div>
          <Link className='sign-in-button' to={`/results/${this.props.pollId}`} >
            <button onClick={this.handleVote} className="sign-in-button">Submit</button>
          </Link>
        </div>
        <br/>
      </div>
    )
  }
}


function mapStateToProps ({questions, users, authedUser}, props) {

  // get question id from address bar
  const { id } = props.match.params

  // get question from id
  const question = questions[id]
  const userAnswer = users[authedUser].answers[id]

  // return props to render a question
  return {
    pollId: id,
    question,
    user: users[question.author],
    authedUser,
    userAnswer
  }
}

export default connect(mapStateToProps)(PollDetails)