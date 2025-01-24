import { FC, useState } from "react";
import styles from "./Stars.module.css";
import cn from "classnames";

interface StarsProps {
  stars: number[];
  selectedStars: number;
  handleStarClick: (index: number) => void;
}

const Stars: FC<StarsProps> = ({ stars, selectedStars, handleStarClick }) => {
  const [hoveredStars, setHoveredStars] = useState(0);

  return (
    <ul className={styles.stars}>
      {stars.map((_, i) => (
        <li
          key={i}
          className={cn(styles.stars__star, {
            [styles.filled]: i < (hoveredStars || selectedStars),
            [styles.empty]: i >= (hoveredStars || selectedStars),
          })}
          onMouseEnter={() => setHoveredStars(i + 1)}
          onMouseLeave={() => setHoveredStars(0)}
          onClick={() => handleStarClick(i)}
        ></li>
      ))}
    </ul>
  );
};

export default Stars;
