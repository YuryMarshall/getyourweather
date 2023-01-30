import React from "react";

import Navigation from "../molecules/Navigation.jsx";

import styles from "./styles/header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}

export default Header;
