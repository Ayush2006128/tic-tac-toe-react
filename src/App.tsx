import React, { useState, useEffect } from 'react'
import './App.css'
import Board from './components/Board'
import { FaRedo } from 'react-icons/fa';
import GameModeDialog from './components/GameModeDialog';
import { calculateWinner } from './logic/shared';
import { aiEasyMove } from './logic/ai_easy';
import { aiHardMove } from './logic/ai_hard';

const App: React.FC = () => {
  const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [showDialog, setShowDialog] = useState(true);
  const [difficulty, setDifficulty] = useState<'human' | 'easy' | 'hard'>('easy');
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: Array<string | null>) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    if (window.confirm('Are you sure you want to reset the game?')) {
      setShowDialog(true);
    }
  }

  function getAiMove(squares: Array<string | null>): number | null {
    if (difficulty === 'easy') return aiEasyMove(squares);
    if (difficulty === 'hard') return aiHardMove(squares);
    return null;
  }

  useEffect(() => {
    if (difficulty !== 'human' && !xIsNext && !calculateWinner(currentSquares)) {
      const aiMove = getAiMove(currentSquares);
      if (aiMove !== null) {
        const nextSquares = currentSquares.slice();
        nextSquares[aiMove] = 'O';
        setTimeout(() => handlePlay(nextSquares), 400);
      }
    }
    // eslint-disable-next-line
  }, [difficulty, xIsNext, currentSquares]);

  function handleDialogSelect(mode: 'human' | 'easy' | 'hard') {
    setDifficulty(mode);
    setShowDialog(false);
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <>
      {showDialog && <GameModeDialog onSelect={handleDialogSelect} />}
      <header className="game-header">
        <nav>
          <h1 className="game-title">Tic Tac Toe</h1>
        </nav>
      </header>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={difficulty !== 'human' && !xIsNext ? () => {} : handlePlay} />
        </div>
        <div className="game-controls">
          <button className="reset-btn" onClick={() => {resetGame()}} title="Reset Game">
            <FaRedo size={24} />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
