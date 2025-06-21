export function aiEasyMove(squares: Array<string | null>): number | null {
  for (let i = 0; i < squares.length; i++) {
    if (!squares[i]) return i;
  }
  return null;
}
