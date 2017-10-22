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
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  let stars = [];
  for (let i=0; i<numberOfStars; i++) {
    stars.push(<span className="icon">
                  <i key={i} className="fa fa-heart"></i>
                </span>);
  }

  return (
    <div className="column">
      {stars}
    </div>
  );
};

const Answer = () => {
  return (
    <div className="numbers column">
      <span className="tag is-rounded">9</span>
      <span className="tag is-rounded">5</span>
      <span className="tag is-rounded">7</span>
    </div>
  );
};

const Numbers = () => {
  // const arrayOfNumbers = [1,2,3,4,5,6,7,8,9]; // will create every time we render component

  return (
    <div className="numbers container is-6 is-offset-6 box">
      {Numbers.list.map((number, i) =>
        <span ket={i} className="tag is-rounded">{number}</span>
      )}
    </div>
  );
};

Numbers.list = [1,2,3,4,5,6,7,8,9];

class Game extends Component {
  render() {
    return (
      <div>
        <div className="columns">
          <Star/>
          <Button/>
          <Answer/>
        </div>
        <div className="columns">
          <Numbers/>
        </div>
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
