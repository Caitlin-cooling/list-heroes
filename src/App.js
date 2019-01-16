import React, { Component } from 'react';
import logo from './DC_Comics_logo.png'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to the heroes app</h2>
        <img src={logo} alt="DC logo"/>
      </div>
    );
  }
}

export default App;
