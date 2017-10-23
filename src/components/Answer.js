import React from 'react';

const Answer = (props) => {
  return (
    <div className="numbers column">
      {props.selectedNumbers.map((number, i) => 
        <span key={i} className="tag is-rounded is-warning" onClick={() => props.unselectNumber(number)}>{number}</span>
      )}
    </div>
  );
};

export default Answer;