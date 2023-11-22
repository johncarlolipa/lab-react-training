// src/components/Random.js

import React from 'react';

function Random(props) {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomValue = getRandomNumber(props.min, props.max);

  return (
    <div className="random-number">
      <p>Random value between {props.min} and {props.max}: {randomValue}</p>
    </div>
  );
}

export default Random;
