import React from "react";

import BurgerIco from "../atoms/img/burger.svg";

import styles from "./styles/atomstyle.module.css";

function BurgerButton(props) {
  return (
    <img
      onClick={props.handler}
      src={BurgerIco}
      alt="Burger"
      className={styles.burger__img}
    />
  );
}

export default BurgerButton;
