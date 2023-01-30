import React from "react";

import BurgerIco from "../atoms/img/burger.svg";
import BurgerLink from "../atoms/BurgerLink.jsx";
import BurgerButton from "../atoms/BurgerButton.jsx";

import styles from "./styles/burgermenu.module.css";

function BurgerMenu(props) {
  if (props.status) {
    return (
      <div className={styles.icon__container}>
        <BurgerButton handler={props.handler} />
        <div className={styles.menu__container}>
          <ul className={styles.menu__ul}>
            <BurgerLink link={"/"} title={"Main"} handler={props.handler} />
            <BurgerLink
              link={"/settings"}
              title={"Settings"}
              handler={props.handler}
            />
            <BurgerLink
              link={"/mycities"}
              title={"My cities"}
              handler={props.handler}
            />
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.icon__container}>
        <BurgerButton handler={props.handler} />
      </div>
    );
  }
}

export default BurgerMenu;
