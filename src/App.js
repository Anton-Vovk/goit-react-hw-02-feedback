import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import Notification from "./components/Notification"


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
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
