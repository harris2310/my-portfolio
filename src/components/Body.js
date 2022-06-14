import React, { Component } from 'react';
import '../css/Body.css';
import stonesURL from '../static/stones.jpg';


export default class Body extends Component {
  render() {
    return (
      <div className="main">
        <div className="stone">
          <img src={stonesURL} alt="stones" />
          <h2 className="headline">Hello! I am a full stack web developer!</h2>
        </div>
      </div>
    );
  }
}
