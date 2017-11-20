import { subscribeToTimer } from './api.js';
import React, { Component } from 'react';
import './App.css';
import TimerGIF from './TimerGIF.gif';

class App extends Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = {
    timestamp:'Please wait...'
  };
  render() {
    return (
      <div className="App">
        <img alt="TimerGIF" src={TimerGIF} />
        <p className="App-intro">
        The timer value is: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
