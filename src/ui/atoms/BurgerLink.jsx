import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/atomstyle.module.css";

function BurgerLink(props) {
  return (
    <li className={styles.burger__link} onClick={props.handler}>
      <NavLink to={props.link}>{props.title}</NavLink>
    </li>
  );
}

export default BurgerLink;
