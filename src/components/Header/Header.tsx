import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile-pic.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <a href="/" className={styles.link}>
          <img src={logo} alt="netflix logo" className={styles.logo} />
        </a>
        
        <span className={styles.date}>Friday July 8th</span>
      </div>
      <div className={styles.header__right}>
        <a href="#" className={styles.icon}></a>
        <a href="#">
          <img src={profile} alt="Profile" className={styles.profile} />
        </a>
      </div>
    </header>
  );
}

export default Header;
