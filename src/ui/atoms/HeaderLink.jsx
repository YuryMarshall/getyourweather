import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles/atomstyle.module.css";

function HeaderLink(props) {
  return (
    <li className={styles.header__link}>
      <NavLink to={props.link}>{props.title}</NavLink>
    </li>
  );
}

export default HeaderLink;
