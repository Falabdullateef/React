import { useState } from "react";
import "./App.css";
import WinnerAlert from "./components/winnerAlert";
import RestartButton from "./components/RestartButton";
import Modal from "./components/Modal";

interface Props {
  value: string;
  onSquareClick: () => void;
}
function Square({ value, onSquareClick }: Props) {
  return (
    <>
      <button onClick={onSquareClick} className="square">
        {value}
      </button>
    </>
  );
}

function calculateWinner(squares: Array<string>) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXnext, setXnext] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const winner = calculateWinner(squares);

  function handleClick(i: number) {
    if (squares[i] || winner) {
      console.log("Invalid move");
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = isXnext ? "X" : "O";
    setXnext(!isXnext);
    setSquares(nextSquares);
  }

  const isDraw = squares.every((square) => square !== "") && !winner;

  const handleRestartClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className={showModal ? "background-blur" : ""}>
        <div className="board-row">
          <Square
            onSquareClick={() => handleClick(0)}
            value={squares[0]}
          ></Square>
          <Square
            onSquareClick={() => handleClick(1)}
            value={squares[1]}
          ></Square>
          <Square
            onSquareClick={() => handleClick(2)}
            value={squares[2]}
          ></Square>
        </div>
        <div className="board-row">
          <Square
            onSquareClick={() => handleClick(3)}
            value={squares[3]}
          ></Square>
          <Square
            onSquareClick={() => handleClick(4)}
            value={squares[4]}
          ></Square>
          <Square
            onSquareClick={() => handleClick(5)}
            value={squares[5]}
          ></Square>
        </div>
        <div className="board-row">
          <Square
            onSquareClick={() => handleClick(6)}
            value={squares[6]}
          ></Square>
          <Square
            onSquareClick={() => handleClick(7)}
            value={squares[7]}
          ></Square>
          <Square
            onSquareClick={() => handleClick(8)}
            value={squares[8]}
          ></Square>
        </div>
        <div>
          {winner ? (
            <WinnerAlert winner={winner}></WinnerAlert>
          ) : isDraw ? (
            <div className="alert alert-primary winner-alert">
              It's a draw! 🤝
            </div>
          ) : (
            <div className="next-turn">Next turn: {isXnext ? "X" : "O"} </div>
          )}
        </div>
        <RestartButton onRestartClick={handleRestartClick} />
      </div>
      {showModal && (
        <Modal
          title="Restart Game?"
          body="Are you sure you want to restart the game? All progress will be removed permenantly"
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default App;
