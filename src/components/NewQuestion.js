import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

// handles the creation of new questions
class NewQuestion extends Component {

  // define component state
  state ={
    optionOne: '',
    optionTwo: ''
  }

  // set options text

  handleOptionOne = (event) => {
    this.setState({
      optionOne: event.target.value
    })
  }

  handleOptionTwo = (event) => {
    this.setState({
      optionTwo: event.target.value
    })
  }

  // dispatch action when form submitted
  handleSubmit = (event) => {
    event.preventDefault()
    const {optionOne, optionTwo } = this.state
    const {dispatch, authedUser} = this.props
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser ))
    this.props.history.push('/home')
  }

  render () {
    return (
      <div className='center poll-card top-10'>
        <h3>Create New Question</h3>
        <form>
          <label>Would You Rather</label>
          <br />
          <input
            value={this.state.optionOne}
            type='text'
            className='input-options'
            onChange={this.handleOptionOne}
            placeholder='Enter option one here...' />
          <br />
          OR
          <br />
          <input
            value={this.state.optionTwo}
            type='text'
            className='input-options'
            onChange={this.handleOptionTwo}
            placeholder='Enter option two here...' />
          <button type='submit' className="sign-in-button" onClick={this.handleSubmit} >Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)