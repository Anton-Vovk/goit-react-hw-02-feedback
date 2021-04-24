import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import Notification from "./components/Notification"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
		const interest = (good * 100) / this.countTotalFeedback();
		return Math.round(interest);
  }

  


  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <Notification> message = "No feedback given" </Notification>
      </>
     );
  }
}
 
export default App;
