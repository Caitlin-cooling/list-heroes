import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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

function Dc() {
  return (
    <div>
      <h1>Welcome to our page</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>Welcome to the heroes app</h2>
          <Route path= "/" component={Images}/>
          <Route path= "/dc-commics" component={Dc}/>
        </div>
      </Router>
    );
  }
}

export default App;
