const RestartButton = ({ onRestartClick }: { onRestartClick: () => void }) => {
  return (
    <button onClick={onRestartClick} className="btn btn-primary restartbtn">
      Restart Game
    </button>
  );
};

export default RestartButton;
