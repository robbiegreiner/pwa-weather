import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={ Header } />
      </div>
    );
  }
}

export default App;
