import React from 'react';
import { connect } from 'react-redux'
import Poll from '../components/Poll'

const PollList = (props) => {
  console.log(props)
    const { questions } = props
    return (
      <div>
        {questions.map((question) => (
            <Poll key={question.id} id={question.id}/>
          ))}
        <br/>
      </div>
    )
}

export default PollList