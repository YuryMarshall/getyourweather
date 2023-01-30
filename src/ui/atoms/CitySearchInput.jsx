import React from "react";

import styles from "./styles/atomstyle.module.css";

function CityInput(props) {
  return (
    <input
      type="text"
      placeholder="Search..."
      className={styles.city__search__input}
      value={props.value}
      onChange={props.handler}
    />
  );
}

export default CityInput;
