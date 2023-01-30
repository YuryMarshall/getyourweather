import React from "react";
import { useState } from "react";

import HeaderLink from "../atoms/HeaderLink.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

import styles from "./styles/navigation.module.css";

function Navigation() {
  const [menuStatus, setMenuStatus] = useState(false);
  const burgerHandler = () => {
    menuStatus ? setMenuStatus(false) : setMenuStatus(true);
  };

  return (
    <nav className={styles.navigation__container}>
      <ul className={styles.navigation__ul}>
        <HeaderLink link={"/"} title={"Main"} />
        <HeaderLink link={"/settings"} title={"Settings"} />
        <HeaderLink link={"/mycities"} title={"My cities"} />
      </ul>
      <BurgerMenu handler={burgerHandler} status={menuStatus} />
    </nav>
  );
}

export default Navigation;
