import { useState, useEffect } from "react";
import "./App.css";
import { useTicTacToe } from "./hooks/useTicTacToe";
import { Modal } from "./components/Modal";
import { GameBoard } from "./components/GameBoard";
import { Info } from "./components/Info";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const {
    board,
    turn,
    winner,
    isDraw,
    handleCellClick,
    restart
  } = useTicTacToe();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (winner) setShowModal(true);
    else setShowModal(false);
  }, [winner]);

  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <div className="centered-container">
      <div>
        <h1 className={isDark ? "title title-dark" : "title"}>Tres en Raya</h1>
        <Info winner={winner} isDraw={isDraw} turn={turn} />
        <GameBoard board={board} onCellClick={handleCellClick} winner={winner} />
        {showModal && (
          <Modal
            winner={winner}
            windowSize={windowSize}
            onRestart={() => {
              restart();
              setShowModal(false);
            }}
            onClose={() => setShowModal(false)}
          />
        )}
        <button
          className="restart-btn"
          onClick={restart}
        >
          Reiniciar juego
        </button>
      </div>
    </div>
  );
}

export default App;
