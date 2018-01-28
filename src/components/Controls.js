import React, { Component } from 'react';

class Controls extends Component {
  constructor(){
    super();
    this.state = {
      cityInput: ''
    }
  }

  handleInput(cityInput){
    this.setState({cityInput})
  }

  render(){
    return(
      <div>
        <input className="city-input" placeholder="Add A City" onChange={(event) => this.handleInput(event.target.value)}></input>
        <button
          className="input-button"
          onClick={() => this.props.addCity(this.state.cityInput)}>add city</button>
      </div>
    )
  }
}

export default Controls;
