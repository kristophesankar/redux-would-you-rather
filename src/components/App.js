import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared';
import Home from '../components/Home'
import PollDetails from '../components/PollDetails'
import PollResults from '../components/PollResults'
import Leaderboard from '../components/Leaderboard'
import NewQuestion from '../components/NewQuestion'
import Login from '../components/Login'
import Nav from '../components/Nav'
import NoMatch from '../components/NoMatch'
import PromptLogin from '../components/PromptLogin'

class App extends Component {

  // mount initial data for the app from the fake database
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  // render all routes for handling page navigation
  render() {
    return (
        <Router>
        <Fragment>
        <LoadingBar style={{ backgroundColor: 'white', height: '3px' }} />
          <div>
            <div className='app-heading'>Would You Rather?</div>
            <Nav authedUser={this.props.authedUser}/>
            <Switch>
              {
                this.props.authed === true
                  ? <Fragment>
                      <Route component={PromptLogin} />
                      <Route path="/" exact component={Login} />
                    </Fragment>
                  : <Fragment>
                      <Route path="/home" authedUser={this.props.authedUser} exact component={Home} />
                      <Route path="/questions/:id" exact component={PollDetails} />
                      <Route path="/results/:id" exact component={PollResults} />
                      <Route path="/leaderboard" exact component={Leaderboard} />
                      <Route path="/add" exact component={NewQuestion} />
                    </Fragment>
              }
              <Route component={NoMatch} />
            </Switch>
          </div>
          </Fragment>
        </Router>

    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authed: authedUser === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App)
