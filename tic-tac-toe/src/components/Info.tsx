interface InfoProps {
  winner: string | null;
  isDraw: boolean;
  turn: boolean;
}

export function Info({ winner, isDraw, turn }: InfoProps) {
  return (
    <div className="info">
      {winner ? (
        <>¡Ganador: {winner}!</>
      ) : isDraw ? (
        <>¡Empate!</>
      ) : (
        <>Turno: {turn ? 'X' : 'O'}</>
      )}
    </div>
  );
} 