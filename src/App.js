import React, { Component } from 'react';
import dc from './DC_Comics_logo.png'
import marvel from './marvel-logo.png'
import './App.css';

function Images() {
  return (
    <div>
      <img src={dc} alt="DC logo"/>
      <img src={marvel} alt="Marvel logo"/>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to the heroes app</h2>
        <Images/>
      </div>
    );
  }
}

export default App;
