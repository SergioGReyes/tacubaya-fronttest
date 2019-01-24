import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a className="tacubaya-link" href="/">TacubayaApp</a>
          <a className="album-lik" href="/albums">Albums</a>
        </nav>
      </div>
    )
  }
}
