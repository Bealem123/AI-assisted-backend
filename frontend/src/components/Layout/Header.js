import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo Section */}
      <div className={styles.header__left}>
        <Link to="/" className={styles.header__logo}>
          <img src={logo} alt="Attendance logo" />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className={styles.header__nav}>
        <ul className={styles.nav__links}>
          <li>
            <Link to="/mark-attendance" className={styles.nav__link}>
              Mark Attendance
            </Link>
          </li>
          <li>
            <Link to="/register" className={styles.nav__link}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.nav__link}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/attendance-trends" className={styles.nav__link}>
              Attendance Trends
            </Link>
          </li>
          <li>
            <Link to="/checkout" className={styles.nav__link}>
              Checkout
            </Link>
          </li>
          <li>
            <Link to="/check-user" className={styles.nav__link}>
              Check User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./Header.module.css";

// const Header = () => {
//   return (
//     <header className={styles.header}>
//       <div className={styles.header__left}>
//         <Link to="/" className={styles.header__logo}>
//           <img src="../" alt="Attendance logo">

//         </Link>
//       </div>
//       <nav className={styles.header__nav}>
//         <ul className={styles.nav__links}>
//           <li>
//             <Link to="/" className={styles.nav__link}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/mark-attendance" className={styles.nav__link}>
//               Mark Attendance
//             </Link>
//           </li>
//           <li>
//             <Link to="/register" className={styles.nav__link}>
//               Register
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className={styles.nav__link}>
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin-dashboard" className={styles.nav__link}>
//               Admin Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/attendance-trends" className={styles.nav__link}>
//               Attendance Trends
//             </Link>
//           </li>
//           <li>
//             <Link to="/checkout" className={styles.nav__link}>
//               Checkout
//             </Link>
//           </li>
//           <li>
//             <Link to="/check-user" className={styles.nav__link}>
//               Check User
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles.header__right}>
//         {/* Add Icons or other components here */}
//       </div>
//     </header>
//   );
// };

// export default Header;
