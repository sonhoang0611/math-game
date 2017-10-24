import React from 'react';

const Numbers = (props) => {
  const numberClassName = (number) =>  {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return "numberUsed";
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "numberSelected";
    }
  }

  return (
    <div className="numbers container is-6 is-offset-6 box">
      {Numbers.list.map((number, i) =>
        <span key={i} className={`${numberClassName(number)} tag is-rounded`}
              onClick={() =>  props.selectNumber(number)}>{number}</span>
      )}
    </div>
  );
};

Numbers.list = [1,2,3,4,5,6,7,8,9];

export default Numbers;