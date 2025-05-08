import React from "react";

interface Props {
  winner: string;
}
const WinnerAlert = ({ winner }: Props) => {
  return (
    <div className="alert alert-success winner-alert">
      The Winner is: {winner} 🎉
    </div>
  );
};

export default WinnerAlert;
