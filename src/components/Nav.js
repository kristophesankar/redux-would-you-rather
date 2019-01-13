import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { handleSetAuthedUser } from '../actions/authedUser'

// handles defining all navigation links
class Nav extends Component {

  handleLogout = (e) => {
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(null))
  }

  render () {
    const { user } = this.props

    return (
      <nav className='center'>
        <NavLink className='nav-link' to='/home' exact activeClassName='active'>
          Home
        </NavLink>
        &nbsp;&nbsp;
        <NavLink className='nav-link'  to='/add' activeClassName='active'>
          New Question
        </NavLink>
        &nbsp;&nbsp;
        <NavLink className='nav-link' to='/leaderboard' activeClassName='active'>
          Leaderboard
        </NavLink>

        <div className='user'>
        {
          typeof user === 'undefined'
            ? <div><NavLink to='/' className="prompt-button">Please log in</NavLink></div>
            : <div>
                <img className="img-avatar" alt={user.id} src={user.avatarURL}/>
                <span className="user-name">{user.name}</span>
                &nbsp;
                <button className="sign-out-button" onClick={this.handleLogout}>Log Out</button>
              </div>
        }
        </div>
      </nav>
  )}
}

function mapStateToProps({ users }, { authedUser }){
  const user = users[authedUser]
  return {
    user
  }
}

export default connect(mapStateToProps)(Nav)