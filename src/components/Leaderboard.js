import React, { Component } from 'react'
import { connect } from 'react-redux'

// shows the users who are leading the game
class Leaderboard extends Component {
  render () {
    const { leaders } = this.props
    return (
      <div className='center'>
        <h3>Leaderboard</h3>
        {console.log(this.props)}
        {
          leaders.map((user, index) => (
            <div key={user.leaderId} className="poll-card">
              <div className="poll-user"><h4>{user.leaderName} asks:</h4></div>
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

  // format users into an array of users with their scores
  const leaders = Object.keys(users).map((userId) => ({
    name: users[userId].name,
    leaderId: userId,
    leaderName: users[userId].name,
    avatarURL: users[userId].avatarURL,
    score: Object.keys(users[userId].answers).length + Object.keys(users[userId].questions).length,
    answered: Object.keys(users[userId].answers).length,
    questions: Object.keys(users[userId].questions).length
  }))

  // mount questions and sorted users to the component props
  return {
    questions: Object.values(questions),
    leaders: leaders.sort((a, b) =>  (b.answered + b.questions) - (a.answered + a.questions))
  }
}

export default connect(mapStateToProps)(Leaderboard)