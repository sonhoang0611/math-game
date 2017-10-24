import React from 'react';

const DoneFrame = (props) => {
  return (
    <div className="is-size-3 has-text-center">
      <p>{props.doneStatus}</p>
      <button className="button is-success has-text-white" onClick={props.resetGame}>Play again</button>
    </div>
  );
};

export default DoneFrame;