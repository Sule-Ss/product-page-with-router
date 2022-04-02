import React from "react";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.activeStyle : undefined
        }
      >
        About
      </NavLink>
      <Link to="/products" >Products</Link>

      {/* <a href="/about">About</a>
      <a href="/products">Products</a> */}
    </div>
  );
}

export default Navbar;
