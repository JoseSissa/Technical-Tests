import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import "./App.css";

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function App() {
  const [board, setBoard] = useState<(null | string)[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState<null | string>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

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

  const checkWinner = (board: (null | string)[]) => {
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
  };

  const handleCellClick = (i: number) => {
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
        setTurn(!turn);
      }
    }
  };
  // Color y fondo del título
  const titleColor = '#222';
  const modalBg = '#222';
  const modalText = '#fff';
  return (
    <div className="centered-container">
      <div>
        <h1 style={{ color: titleColor }}>Tic-Tac-Toe</h1>
        <div style={{ margin: '16px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
          {winner ? (
            <>¡Ganador: {winner}!</>
          ) : isDraw ? (
            <>¡Empate!</>
          ) : (
            <>Turno: {turn ? 'X' : 'O'}</>
          )}
        </div>
        <section className="game-board">
          <div className="board-grid">
            {board.map((cell, i) => (
              <div className="board-cell" key={i} onClick={() => handleCellClick(i)}>
                {cell}
              </div>
            ))}
          </div>
        </section>
        {showModal && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              background: modalBg,
              padding: '40px 32px',
              borderRadius: '12px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.25)',
              textAlign: 'center',
              minWidth: '300px',
              color: modalText
            }}>
              {winner && (
                <Confetti width={windowSize.width} height={windowSize.height} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1100 }} />
              )}
              <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: modalText }}>Ha ganado el jugador: {winner}</h2>
              <button
                style={{
                  marginTop: '12px',
                  padding: '10px 24px',
                  fontSize: '1rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: '#fff',
                  color: '#222',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
                onClick={() => {
                  setBoard(Array(9).fill(null));
                  setTurn(true);
                  setWinner(null);
                  setIsDraw(false);
                  setShowModal(false);
                }}
              >
                Iniciar otra partida
              </button>
            </div>
          </div>
        )}
        <button
          style={{
            marginTop: '24px',
            padding: '10px 24px',
            fontSize: '1rem',
            borderRadius: '6px',
            border: 'none',
            background: '#333',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
            letterSpacing: '1px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
          onClick={() => {
            setBoard(Array(9).fill(null));
            setTurn(true);
            setWinner(null);
            setIsDraw(false);
          }}
        >
          Reiniciar juego
        </button>
      </div>
    </div>
  );
}

export default App;
