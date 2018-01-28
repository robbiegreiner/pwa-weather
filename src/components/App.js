import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import apiKey from '../apikey';

class App extends Component {
  constructor(){
    super();
    this.state = {
      weatherData : {},
      city: 'Denver, Colorado'
    }
  }

  componentDidMount(){
    this.fetchWeatherData(this.state.city)
  }

  fetchWeatherData(city){
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${city}.json`)
      .then(response => response.json())
      .then(result => this.setState({ weatherData: result }));
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
