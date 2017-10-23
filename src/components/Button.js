import React from 'react';

const Button = (props) => {
  return (
    <div className="column">
      <button className="button is-medium is-success" disabled={props.selectedNumbers.length === 0}>=</button>
    </div>
  );
};

export default Button;