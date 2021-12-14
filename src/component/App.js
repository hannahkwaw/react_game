import React from "react";

import AddPlayerForm from "./AddPlayeForm";
import Header from "./Header";
import Player from "./Player";
import { Provider } from "./Context/index.js";

//import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const myTitleID = "main-title";
// const name = "Hannah"

// const desc = "This is a react paragraph";

// const header = (
//   <header>
//     <h1 id={myTitleID}> {name}'s first react Element</h1>
//     <p className="main-desc"> {desc}</p>
//   </header>
// );

// const players = [
//   {
//     name: "Hannah",
//     score: 50,
//     id: 1,
//   },
//   {
//     name: "Nana
//     score: 14,
//     id: 2,
//   },
//   {
//     name: "Wizzy",
//     score: 10,
//     id: 3,
//   },
//   {
//     name: "Raja",
//     score: 5,
//     id: 4,
//   },
// ];

// class Pet {
//   constructor(animal, age, breed, sound) {
//     this.animal = animal;
//     this.age = age;
//     this.breed = breed;
//     this.sound = sound;
//   }
//   speak() {
//     console.log(this.sound);
//   }
// }

class App extends React.Component {
  state = {
    players: [
      {
        name: "Hannah",
        score: 0,
        id: 1,
      },
      {
        name: "Nana",
        score: 0,
        id: 2,
      },
      {
        name: "Wizzy",
        score: 0,
        id: 3,
      },
      {
        name: "Raja",
        score: 0,

        id: 4,
      },
    ],
  };

  getHighScore = () => {
    const score = this.state.players.map((p) => p.score);
    const highScore = Math.max(...score);
    if (highScore) {
      return highScore;
    }
    return null;
  };

  hann = (a, b) => {};
  //Player id change
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((p) => p.id !== id),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => {
      return {
        players: [
          ...prevState.players,
          { name: name, score: 0, id: (this.prevPlayerId += 1) },
        ],
      };
    });
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />

          {/* Players */}
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
              isHighScore={highScore === player.score}
            />
          ))}
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
