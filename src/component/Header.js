import React from "react";
import Stats from "./Stats";
import StopWatch from "./StopWatch";

const Header = ({ title }) => {
  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <StopWatch />
    </header>
  );
};

export default Header;
