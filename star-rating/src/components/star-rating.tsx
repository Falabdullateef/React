import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../App.css";
interface StarRatingProps {
  nOfStars: number;
}

const StarRating = ({ nOfStars = 5 }: StarRatingProps) => {
  const handleStarClick = (getCurrentIndex: number) => {
    console.log(getCurrentIndex);
  };

  const handleStarHover = (getCurrentIndex: number) => {
    console.log(getCurrentIndex);
  };

  const handleStarLeave = (getCurrentIndex: number) => {
    console.log("You have left star: " + getCurrentIndex.toString());
  };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(nOfStars)].map((_, index) => (
        <FaStar
          onClick={() => handleStarClick(index + 1)}
          onMouseMove={() => handleStarHover(index + 1)}
          onMouseLeave={() => handleStarLeave(index + 1)}
        />
      ))}
    </div>
  );
};

export default StarRating;
