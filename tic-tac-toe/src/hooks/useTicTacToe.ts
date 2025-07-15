import { useState, useEffect, useCallback } from "react";
import { WINNER_COMBOS } from "../constants.d";

export function useTicTacToe() {
  const [board, setBoard] = useState<(null | string)[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState<null | string>(null);
  const [isDraw, setIsDraw] = useState(false);

  useEffect(() => {
    if (winner || isDraw) return;
    if (board.every(cell => cell !== null)) {
      setIsDraw(true);
    }
  }, [board, winner, isDraw]);

  const checkWinner = useCallback((board: (null | string)[]) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }
    return null;
  }, []);

  const handleCellClick = useCallback((i: number) => {
    if (board[i] !== null || winner) return;
    const newBoard = [...board];
    newBoard[i] = turn ? "X" : "O";
    setBoard(newBoard);
    const win = checkWinner(newBoard);
    if (win) {
      setWinner(win);
      setIsDraw(false);
    } else {
      if (newBoard.every(cell => cell !== null)) {
        setIsDraw(true);
      } else {
        setTurn(prevTurn => !prevTurn);
      }
    }
  }, [board, winner, turn, checkWinner]);

  const restart = useCallback(() => {
    setBoard(Array(9).fill(null));
    setTurn(true);
    setWinner(null);
    setIsDraw(false);
  }, []);

  return {
    board,
    turn,
    winner,
    isDraw,
    handleCellClick,
    restart,
    setWinner,
    setIsDraw
  };
} 