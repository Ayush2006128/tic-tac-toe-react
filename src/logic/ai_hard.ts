import { calculateWinner } from './shared';

export function aiHardMove(squares: Array<string | null>): number | null {
  function minimax(squares: Array<string | null>, isMaximizing: boolean): { score: number, move: number | null } {
    const winner = calculateWinner(squares);
    if (winner === 'O') return { score: 1, move: null };
    if (winner === 'X') return { score: -1, move: null };
    if (squares.every(s => s)) return { score: 0, move: null };
    let bestMove: number | null = null;
    let bestScore = isMaximizing ? -Infinity : Infinity;
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        const newSquares = squares.slice();
        newSquares[i] = isMaximizing ? 'O' : 'X';
        const { score } = minimax(newSquares, !isMaximizing);
        if (isMaximizing) {
          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        } else {
          if (score < bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }
    }
    return { score: bestScore, move: bestMove };
  }
  return minimax(squares, true).move;
}
