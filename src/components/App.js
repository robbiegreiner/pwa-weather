import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Controls from './Controls.js';
import apiKey from '../apikey';

class App extends Component {
  constructor(){
    super();
    this.state = {
      weatherData : [],
      cityList: []
    }

    this.addCity = this.addCity.bind(this);
  }

  // componentDidMount(){
  //   this.fetchWeatherData(this.state.cityList)
  // }

  addCity(city){
    this.setState({ cityList: [...this.state.cityList, city]})
    this.fetchWeatherData(city);
  }

  fetchWeatherData(city){
    fetch(`http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${city}.json`)
      .then(response => response.json())
      .then(result => this.setState({ weatherData: [...this.state.weatherData, result ]}));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Controls addCity={this.addCity} />
      </div>
    );
  }
}

export default App;
