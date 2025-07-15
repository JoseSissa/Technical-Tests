import Confetti from "react-confetti";
import "./modal.css";

interface ModalProps {
  winner: string | null;
  windowSize: { width: number; height: number };
  onRestart: () => void;
  onClose: () => void;
}

export function Modal({ winner, windowSize, onRestart, onClose }: ModalProps) {
  if (!winner) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <Confetti width={windowSize.width} height={windowSize.height} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1100 }} />
        <h2 className="modal-title">Ha ganado el jugador: {winner}</h2>
        <button className="modal-btn" onClick={onRestart}>
          Iniciar otra partida
        </button>
      </div>
    </div>
  );
} 