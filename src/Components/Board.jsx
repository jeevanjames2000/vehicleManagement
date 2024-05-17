import React from "react";
import Vehicle from "./Vehicle";
import "../Styles/Board.css";

const Board = ({ vehicles, scenarioTime }) => {
  return (
    <div className="board">
      {vehicles.map((vehicle) => (
        <Vehicle
          key={vehicle.id}
          vehicle={vehicle}
          scenarioTime={scenarioTime}
        />
      ))}
    </div>
  );
};

export default Board;
