import React from 'react';

const Heart = (props) => {
  let hearts = [];

  for (let i=0; i<props.numberOfHearts; i++) {
    hearts.push(<span className="icon">
                  <i key={i} className="fa fa-heart"></i>
                </span>);
  }

  return (
    <div className="column">
      {hearts}
    </div>
  );
};


export default Heart;