import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import dc from './DC_Comics_logo.png'
import marvel from './marvel-logo.png'
import './App.css';

function Images() {
  return (
    <div>
      <Link to="/dc-commics"><img src={dc} alt="DC logo"/></Link>
      <Link to="/marvel-commics"><img src={marvel} alt="Marvel logo"/></Link>
    </div>
  )
}

function Dc() {
  return (
    <div>
      <h2>Welcome to DC</h2>
    </div>
  )
}

function Marvel() {
  return (
    <div>
      <h2>Welcome to Marvel</h2>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h2>Welcome to the heroes app</h2>
          <Route exact path= "/" component={Images}/>
          <Route exact path= "/dc-commics" component={Dc}/>
          <Route exact path= "/marvel-commics" component={Marvel}/>
        </div>
      </Router>
    );
  }
}

export default App;
