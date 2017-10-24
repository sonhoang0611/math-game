import React, { Component } from 'react';
import Answer from './Answer.js';
import Numbers from './Numbers.js';
import Heart from './Heart.js';
import Button from './Button.js';
import DoneFrame from './DoneFrame.js';

class Game extends Component {
  static randomNumbers = () => 1 + Math.floor(Math.random() * 9)

  static initialState = () => ({
    selectedNumbers: [],
    usedNumbers: [],
    numberOfHearts: Game.randomNumbers(),
    answerIsCorrect: null,
    limitRedraw: 5,
    doneStatus: null
  });

  state = Game.initialState();

  resetGame = () => this.setState(Game.initialState());

  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0 || 
        this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }

    this.setState((prevState) => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }))
  }

  unselectNumber = (clickedNumber) => {
    this.setState((prevState) => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber)
    }))
  }

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.numberOfHearts === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }))
  }

  acceptAnswer = () => {
    this.setState(prevState => ({
      usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfHearts: Game.randomNumbers()
    }), this.updateDoneStatus) 
  }

  redraw = () => {
    if (this.state.limitRedraw === 0) {
      return;
    }

    this.setState(prevState => ({
      selectedNumbers: [],
      answerIsCorrect: null,
      numberOfHearts: Game.randomNumbers(),
      limitRedraw: prevState.limitRedraw - 1
    }), this.updateDoneStatus)
  }

  possibleSolutions = ({numberOfHearts, usedNumbers}) => {
    const possibleNumbers = [1,2,3,4,5,6,7,8,9].filter(number => 
      usedNumbers.indexOf(number) === -1
    );

    return possibleCombinationSum(possibleNumbers, numberOfHearts);
  }

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { doneStatus: 'Win!' }; 
      }
      if (prevState.limitRedraw === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: 'Lose!' };
      }
    });
    
  }

  render() {
    const { selectedNumbers, numberOfHearts, answerIsCorrect, usedNumbers, limitRedraw, doneStatus } = this.state;

    return (
      <div>
        <div className="columns">
          <Heart numberOfHearts={numberOfHearts} />
          <Button selectedNumbers={selectedNumbers}
            checkAnswer={this.checkAnswer}
            answerIsCorrect={answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            redraw={this.redraw}
            limitRedraw={limitRedraw} />
          <Answer selectedNumbers={selectedNumbers}
            unselectNumber={this.unselectNumber} />
        </div>
        <div className="columns">
          {
            doneStatus ? <DoneFrame doneStatus={doneStatus} resetGame={this.resetGame}/>
                       : <Numbers selectedNumbers={selectedNumbers}
                                  selectNumber={this.selectNumber}
                                  usedNumbers={usedNumbers}/>
          }
        </div>
      </div>
    );
  }
}

var possibleCombinationSum = function(arr, n) {
  console.log('ahaha');
  if (arr.indexOf(n) >= 0) { return true; }
  if (arr[0] > n) { return false; }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length, combinationsCount = (1 << listSize)
  for (var i = 1; i < combinationsCount ; i++ ) {
    var combinationSum = 0;
    for (var j=0 ; j < listSize ; j++) {
      if (i & (1 << j)) { combinationSum += arr[j]; }
    }
    if (n === combinationSum) { return true; }
  }
  return false;
}

export default Game;