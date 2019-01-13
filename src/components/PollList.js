import React from 'react'
import Poll from '../components/Poll'

const PollList = (props) => {
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