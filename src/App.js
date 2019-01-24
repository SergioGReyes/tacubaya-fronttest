import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Albums from './Components/Albums/Albums'
import Main from './Components/Main/Main';
import Photos from './Components/Photos/Photos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/albums" component={Albums}/>
          <Route exact path="/photos/:id" component={Photos}/>         
        </Switch>
      </div>
    );
  }
}

export default App;
