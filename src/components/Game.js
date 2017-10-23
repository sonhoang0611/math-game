import React, { Component } from 'react';
import Answer from './Answer.js';
import Numbers from './Numbers.js';
import Heart from './Heart.js';
import Button from './Button.js';

class Game extends Component {
  state = {
    selectedNumbers: [],
    numberOfHearts: 1 + Math.floor(Math.random() * 9)
  }

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
    this.setState((prevState) => ({
        selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
      }))
    }
  }

  unselectNumber = (clickedNumber) => {
    this.setState((prevState) => ({
        selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
      }))
  }

  render() {
    const { selectedNumbers, numberOfHearts } = this.state;

    return (
      <div>
        <div className="columns">
          <Heart numberOfHearts={numberOfHearts}/>
          <Button selectedNumbers={selectedNumbers} />
          <Answer selectedNumbers={selectedNumbers}  
                  unselectNumber={this.unselectNumber}/>
        </div>
        <div className="columns">
          <Numbers selectedNumbers={selectedNumbers}
                    selectNumber={this.selectNumber}/>
        </div>
      </div>
    );
  }
}

export default Game;