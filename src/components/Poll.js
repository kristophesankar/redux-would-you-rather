import React, { Component } from 'react';
import { connect } from 'react-redux'


class Poll extends Component {
  render () {
    const { question } = this.props

    return (
      <div>
        <div>
          Would you rather: {question.optionOne.text} ({question.optionOne.votes.length} votes) or {question.optionTwo.text} ({question.optionTwo.votes.length} votes)
        </div>
        <br/>
      </div>
    )
  }
}

function mapStateToProps ({ questions }, { id }) {
  const question = questions[id]
  return {
    question
  }
}

export default connect(mapStateToProps)(Poll)