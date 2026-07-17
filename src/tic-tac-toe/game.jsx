import { useState } from "react";
import CalcWinner from "./calculateWinner";
import Square from "./square";
import Board from "./board";
import './game.css'

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
   
    const cleanHistory = history.slice(0, currentMove + 1);
    const nextHistory = [...cleanHistory, nextSquares];
    
    setHistory(nextHistory);
    
    setCurrentMove(nextHistory.length - 1);
  }
  function handleReset(){
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
  }

  function autoClean(){}

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
   
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
      <button onClick={handleReset} className="reset-btn">Reset</button>
    </div>
  );
}