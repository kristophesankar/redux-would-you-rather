import React, { Component } from 'react'
import { connect } from 'react-redux'
import PollList from '../components/PollList'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class Home extends Component {
  render () {
    return (
      <Tabs>
        <h3 className="center">Home</h3>
        <TabList className='center'>
          <Tab>Unanswered Questions</Tab>
          <Tab>Answered Questions</Tab>
        </TabList>

        <TabPanel className='center'>
          <PollList key='unansweredQuestions' questions={this.props.unansweredQuestions}/>
        </TabPanel>

        <TabPanel className='center'>
          <PollList key='answeredQuestions' questions={this.props.answeredQuestions}/>
        </TabPanel>
      </Tabs>
    )
  }
}

function mapStateToProps ({ users, authedUser, questions }) {
  const userAnswers = users[authedUser].answers;
  return {
    answeredQuestions: Object.values(questions).filter((question) => {
      return Object.keys(userAnswers).includes(question.id)
    }).sort((a, b) => b.timestamp - a.timestamp),
    unansweredQuestions: Object.values(questions).filter((question) => {
      return !(Object.keys(userAnswers).includes(question.id))
    }).sort((a, b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(Home)