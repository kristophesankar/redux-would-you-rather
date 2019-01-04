import React, { Component } from 'react'
import { connect } from 'react-redux'
import Poll from '../components/Poll'
import PollList from '../components/PollList'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

// TODO: Change to answered when user votes

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

function mapStateToProps ({ questions }) {
  return {
    unansweredQuestions: Object.values(questions).filter((question) => {
      return question.optionOne.votes.length === 0 && question.optionTwo.votes.length === 0
    }),
    answeredQuestions: Object.values(questions).filter((question) => {
      return question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0
    })
  }
}

export default connect(mapStateToProps)(Home)