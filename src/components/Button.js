import React from 'react';

const Button = (props) => {
  let button;
  switch (props.answerIsCorrect) {
    case true:
      button = 
      <button className="button is-large is-success" onClick={props.acceptAnswer}> 
          <i className="fa fa-check"></i>
      </button>
      break;
    case false:
      button =
        <button className="button is-large is-danger">
            <i className="fa fa-times"></i>
        </button>
      break;
    default:
      button = 
        <button className="button is-large" onClick={props.checkAnswer} disabled={props.selectedNumbers.length === 0}>
          =
        </button>
      break;
  }

  return (
    <div className="column">
      {button}
      <br/><br/>
      <button className="button is-warning is-medium" onClick={props.redraw} disabled={props.limitRedraw === 0}>
        <i className="fa fa-refresh"></i>&nbsp;&nbsp;{props.limitRedraw}
      </button>   
    </div>
  );
};

export default Button;