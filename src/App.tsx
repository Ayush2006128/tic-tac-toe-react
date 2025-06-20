import React, { useState } from 'react'
import './App.css'
import Board from './components/Board'
import { FaRedo } from 'react-icons/fa';

const App: React.FC = () => {
  const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }


  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <>
      <header className="game-header">
        <nav>
          <h1 className="game-title">Tic Tac Toe</h1>
        </nav>
      </header>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <button className="reset-btn" onClick={resetGame} title="Reset Game">
            <FaRedo size={24} />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
