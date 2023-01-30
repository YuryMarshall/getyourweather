import React from "react";

import Input from "../atoms/SettingInput.jsx";

import styles from "./styles/settings.module.css";

function Settings(props) {
  return (
    <div className={styles.settings__container}>
      <h1 className={styles.title}>Weather settings:</h1>
      <section className={styles.input__container}>
        <Input
          id={"Humidity"}
          status={props.humidityStatus}
          change={props.change}
          tag={"Humidity"}
        />
        <Input
          id={"Sunset"}
          status={props.sunsetStatus}
          change={props.change}
          tag={"Sunset time"}
        />
        <Input
          id={"Sunrise"}
          status={props.sunriseStatus}
          change={props.change}
          tag={"Sunrise time"}
        />
        <Input
          id={"Feels"}
          status={props.feelsStatus}
          change={props.change}
          tag={"Feels temperature"}
        />
      </section>
    </div>
  );
}

export default Settings;
