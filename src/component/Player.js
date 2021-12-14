import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Icon from "./Icon";

//import AddPlayerForm from "./AddPlayeForm";
import Counter from "./Counter";

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    removePlayer: PropTypes.func,
  };

  render() {
    const { name, removePlayer, id, score, index, changeScore,isHighScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            x
          </button>
          <Icon isHighScore= {isHighScore}/>
          {name}
        </span>

        <Counter score={score} index={index} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;
