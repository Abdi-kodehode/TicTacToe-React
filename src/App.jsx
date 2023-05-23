import { useState, useEffect } from "react";
import Cell from "./components/Cell";
import "./App.css";

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [turn, setTurn] = useState("circle");
  const [winnerMsg, setWinnerMsg] = useState(null);

  const message = "It's now " + turn + "'s turn";

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const scoreChecker = () => {
    for (const arr of winningCombos) {
      const isWinner = arr.every((cell) => cells[cell] === turn);
      if (isWinner) {
        setWinnerMsg(`${turn.charAt(0).toUpperCase() + turn.slice(1)} Wins!`);
        return;
      }
    }
  };

  useEffect(() => {
    scoreChecker();
  }, [cells]);

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setCells={setCells}
            turn={turn}
            setTurn={setTurn}
            cells={cells}
            WinnerMsg={winnerMsg}
          />
        ))}
      </div>
      <p>{winnerMsg || message}</p>
    </div>
  );
};

export default App;
