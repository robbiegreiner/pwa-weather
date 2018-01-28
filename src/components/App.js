import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header.js';

class App extends Component {
  // fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${city}.json`)
  //   .then(response => response.json())
  //   .then(result => console.log(result));


  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
