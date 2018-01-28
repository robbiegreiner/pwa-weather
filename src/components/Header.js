import React, { Component } from 'react';
import '../styles/App.css';

export default class Header extends Component {

  render(){
    return(
      <div className='header'>
        <h1>PWA</h1>
        <h4>progressive weather app</h4>
      </div>
    )
  }
}
