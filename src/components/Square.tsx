import React from 'react';
import './Square.css';

interface SquareProps {
    value: string | null;
    onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button
      className={"square animate-square" + (value ? " filled" : "")}
      onClick={onSquareClick}
    >
      {value && (
        <span className={value === 'X' ? 'x-mark' : 'o-mark'}>{value}</span>
      )}
    </button>
  );
}
export default Square;