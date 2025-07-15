import React from "react";

interface GameBoardProps {
  board: (null | string)[];
  onCellClick: (index: number) => void;
  winner: string | null;
}

export const GameBoard: React.FC<GameBoardProps> = ({ board, onCellClick, winner }) => {
  return (
    <section className="game-board">
      <div className="board-grid">
        {board.map((cell, i) => (
          <div
            className="board-cell"
            key={i}
            onClick={() => onCellClick(i)}
            aria-disabled={!!winner}
          >
            {cell}
          </div>
        ))}
      </div>
    </section>
  );
};
