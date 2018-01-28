import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header.js';
import apiKey from '../apikey';

class App extends Component {
  constructor(){
    super();
    this.state = {
      weatherData : {},
    }
  }

  componentDidMount(){
    this.fetchWeatherData("Denver, Colorado")
  }

  fetchWeatherData(city){
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${city}.json`)
      .then(response => response.json())
      .then(result => console.log(result));
  }



  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;
