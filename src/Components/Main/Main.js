import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './Main.css';


export default class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          <h1 className="main-title">Welcome to Tacubaya App</h1>
        </div>

      </div>
    )
  }
}
