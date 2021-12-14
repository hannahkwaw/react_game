import React from "react";
import PropTypes from "prop-types";

const Counter = ({ changeScore, score, index }) => {
  // state = {
  //   score: 0,
  // };

  // decrementScore = () => {
  //   this.setState((prevState) => ({
  //     score: prevState.score - 1,
  //   }));
  // };
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => changeScore(index, -1)}
      >
        -
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changeScore(index, +1)}
      >
        +
      </button>
    </div>
  );
};

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number,
  changeScore: PropTypes.func,
};

export default Counter;
