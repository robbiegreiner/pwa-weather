import React, { Component } from 'react';
import '../styles/App.css';

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
