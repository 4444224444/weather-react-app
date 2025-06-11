import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header({ isLoggedIn }) {
  return (
    <header className={styles.fixedHeader}>
      {isLoggedIn ? (
        <Link to="/mypage">
          <button className={styles.button}>MY</button>
        </Link>
      ) : (
        <Link to="/login">
          <button className={styles.button}>SIGN IN</button>
        </Link>
      )}
    </header>
  );
}

export default Header;
