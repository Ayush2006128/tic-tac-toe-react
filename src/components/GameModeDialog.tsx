import React from 'react';
import { FaUser, FaRobot, FaBrain } from 'react-icons/fa';
import './GameModeDialog.css';

interface GameModeDialogProps {
  onSelect: (mode: 'human' | 'easy' | 'hard') => void;
}

const GameModeDialog: React.FC<GameModeDialogProps> = ({ onSelect }) => {
  return (
    <div className="dialog-backdrop">
      <div className="dialog-box">
        <h2>Choose Game Mode</h2>
        <div className="dialog-options">
          <button className="dialog-btn" onClick={() => onSelect('human')}>
            <FaUser size={28} />
            <span>2 Players</span>
          </button>
          <button className="dialog-btn" onClick={() => onSelect('easy')}>
            <FaRobot size={28} />
            <span>AI (Easy)</span>
          </button>
          <button className="dialog-btn" onClick={() => onSelect('hard')}>
            <FaBrain size={28} />
            <span>AI (Hard)</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModeDialog;
