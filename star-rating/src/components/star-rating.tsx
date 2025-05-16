import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "../App.css";
interface StarRatingProps {
  nOfStars: number;
}

const StarRating = ({ nOfStars = 5 }: StarRatingProps) => {
  const handleStarClick = (getCurrentIndex: number) => {
    setRating(getCurrentIndex);
  };

  const handleStarHover = (getCurrentIndex: number) => {
    setHover(getCurrentIndex);
  };

  const handleStarLeave = () => {
    setHover(rating);
  };

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(nOfStars)].map((_, index) => (
        <FaStar
          key={index + 1}
          className={index + 1 <= (hover || rating) ? "active" : "inactive"}
          onClick={() => handleStarClick(index + 1)}
          onMouseMove={() => handleStarHover(index + 1)}
          onMouseLeave={() => handleStarLeave()}
        />
      ))}
    </div>
  );
};

export default StarRating;
