import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// an individual poll on the home page
class Poll extends Component {
  render () {
    const { question, user, id } = this.props
    return (
      <div>
        <div className="poll-card">
          <div className="poll-user"><h4>{user.name} asks:</h4></div>
          <div className="left">
            <img className="poll-card-avatar" alt={user.avatarURL} src={user.avatarURL} />
          </div>
          <div className="right">
            <b>Would you rather</b>
            <br/>
            <p className="truncate center">{question.optionOne.text}</p>
          </div>
          <Link className='sign-in-button' to={`/questions/${id}`} >
            <button className="sign-in-button">View poll</button>
          </Link>
        </div>
        <br/>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }, { id }) {
  const question = questions[id]
  const user = users[question.author]
  return {
    question,
    user
  }
}

export default connect(mapStateToProps)(Poll)