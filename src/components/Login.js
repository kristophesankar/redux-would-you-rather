import React, { Component } from 'react'
import signInLogo from'../assets/BlueCircle.png'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'

// handles the login functionality of the app
class Login extends Component {
  state = {
    selectedOption: 'johndoe'
  }

  handleOnChange = (e) => {
    const optionValue = e.target.options[e.target.selectedIndex].id
    this.setState(currentState => ({
      selectedOption: optionValue
    }))
  }

  handleLogin = (e) => {
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(this.state.selectedOption))
    this.props.history.push(`/home`)
  }

  // shows list of users to login from
  render () {
    const { options } = this.props
    return (
      <div className="login-container">
        <div className="login-card">
          <h3 className="login-heading">Welcome to the Would You Rather App</h3>
          <img className="signInLogo" alt={signInLogo} src={signInLogo} />
          <h3>Sign in</h3>
          <select value={this.state.selectedOption} onChange={this.handleOnChange}>
          {
            options.map((option) => (
              <option key={option.value} id={option.value} value={option.value}>{option.label}</option>
              ))
          }
          </select>
          <br />
          <button className="sign-in-button" onClick={this.handleLogin}>Sign In</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  // mount the user options to login
  return {
    options: Object.values(users).map((user) => {
      return {value: user.id, label: user.name }
    })
  }
}

export default connect(mapStateToProps)(Login)