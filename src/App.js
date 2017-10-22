import React, { Component } from 'react';
import './style/App.css';

const Button = () => {
  return (
    <div className="column">
      <button className="button is-primary"> = </button>
    </div>
  );
};

const Star = () => {
  return (
    <div className="column">
      <span className="icon">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
      <span className="icon">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
      <span className="icon">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
      <span className="icon">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
      <span className="icon">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </span>
    </div>
  );
};

const Answer = () => {
  return (
    <div className="column">
      <h3>...</h3>
    </div>
  );
};

class Game extends Component {
  render() {
    return (
      <div className="columns">
        <Star/>
        <Button/>
        <Answer/>
      </div>
    );
  }
}

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
