import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Leaderboard extends Component {
  render () {
    const { leaders } = this.props

    return (
      <div className='center'>
        <h3>Leaderboard</h3>
        {console.log(this.props)}
        {
          leaders.map((user) => (
            <div key={user.id} className="poll-card">
              <div className="poll-user"><h4>{user.name} asks:</h4></div>
              <div className="left">
                <img className="poll-card-avatar" alt={user.avatarURL} src={user.avatarURL} />
              </div>
              <div className="right">
                <b>Score: {user.score}</b>
                <p>Answered Questions: {user.answered}</p>
                <p>Created Questions: {user.questions}</p>
                <br/>
                <p className="truncate center"></p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }) {

  const leaders = Object.keys(users).map((userId) => ({
    name: users[userId].name,
    id: userId,
    name: users[userId].name,
    avatarURL: users[userId].avatarURL,
    score: Object.keys(users[userId].answers).length + Object.keys(users[userId].questions).length,
    answered: Object.keys(users[userId].answers).length,
    questions: Object.keys(users[userId].questions).length
  }))

  return {
    questions: Object.values(questions),
    leaders: leaders.sort((a, b) =>  (b.answered + b.questions) - (a.answered + a.questions))
  }
}

export default connect(mapStateToProps)(Leaderboard)