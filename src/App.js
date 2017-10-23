import React, { Component } from 'react';
import './style/App.css';
import Game from './components/Game.js';

class App extends Component {
  render() {
    return (
      <div className="container is-6 is-offset-6">
       <Game/>
      </div>
    );
  }
}

export default App;
