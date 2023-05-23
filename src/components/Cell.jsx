import React from "react";

const Cell = ({ id, cell, setCells, turn, setTurn, cells, WinnerMsg }) => {
  const handleClick = (e) => {
    const taken =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross");

    if (!taken) {
      cellChange(turn);
      setTurn(turn === "circle" ? "cross" : "circle");
    }
  };

  const cellChange = (arg) => {
    const nextCells = [...cells];
    nextCells[id] = arg;
    setCells(nextCells);
  };

  return (
    <div
      className="square"
      id={id}
      onClick={!WinnerMsg ? handleClick : undefined}
    >
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
