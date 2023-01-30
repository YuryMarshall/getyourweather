import React from "react";

import styles from "../organisms/styles/settings.module.css";

function Input(props) {
  return (
    <label className={styles.label}>
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.status}
        onChange={props.change}
        className={styles.switch}
      />
      {props.tag}
    </label>
  );
}

export default Input;
