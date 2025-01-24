import { useState } from "react";
import Button from "../Button/Button";
import PopularList from "../PopularList/PopularList";
import Stars from "../Stars/Stars";
import styles from "./PageInfo.module.css";

function PageInfo() {
  const [selectedStars, setSelectedStars] = useState(0);
  const stars = [0, 1, 2, 3, 4];

  const handleStarClick = (i: number) => {
    setSelectedStars(i + 1);
  };

  const handleStreamClick = () => {
    console.log("Stream Now clicked");
  };

  const handleAllEpisodesClick = () => {
    console.log("All Episodes clicked");
  };
  return (
    <>
      <div className={styles.fixedRectangle}>
        <div className={styles.redSection}></div>
        <div className={styles.whiteSection}>16+</div>
      </div>

      <div className={styles.pageContainer}>
        <ul className={`${styles.flex} ${styles.filmGenresContainer}`}>
          <li className={styles.filmGenres}>Drama</li>
          <li className={styles.filmGenres}>Thriller</li>
          <li className={styles.filmGenres}>Supernatural</li>
        </ul>

        <h1 className={styles.filmTitle}>Stranger Things</h1>

        <ul className={styles.flex}>
          <li className={styles.filmInfo}>2019</li>
          <li className={styles.filmInfo}>
            DIRECTOR: <span className={styles.filmInfoSpan}>Shawn Levy</span>
          </li>
          <li className={styles.filmInfo}>
            seasons: <span className={styles.filmInfoSpan}>3 (5 episodes)</span>
          </li>
        </ul>

        <div className={styles.filmDescription}>
          In 1980s Indiana, a group of young friends witness supernatural forces
          and secret government exploits. As they search for answers, the
          children unravel a series of extraordinary mysteries.
        </div>

        <div className={styles.starsContainer}>
          <Stars
            stars={stars}
            selectedStars={selectedStars}
            handleStarClick={handleStarClick}
          />
        </div>

        <div className={`${styles.flex} ${styles.buttonContainer}`}>
          <Button
            variant="filled"
            text="Stream Now"
            showIcon={true}
            onClick={handleStreamClick}
          />
          <Button
            variant="outlined"
            text="All Episodes"
            showIcon={false}
            onClick={handleAllEpisodesClick}
          />
        </div>
      </div>

      <PopularList />
    </>
  );
}

export default PageInfo;
