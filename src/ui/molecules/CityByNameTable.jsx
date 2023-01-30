import React from "react";

import SaveIco from "../atoms/img/save.png";
import Settings from "../atoms/SettingConstructor.jsx";

import styles from "./styles/weathertable.module.css";

function byCityName(props) {
  if (props.cityData === null) {
    return;
  } else {
    return (
      <div className={styles.weather__container}>
        <div className={styles.name__container}>
          <h1 className={styles.city__name}>
            {props.cityData ? props.cityData.name : "No data"}
          </h1>
          <img
            src={
              props.cityData
                ? "https://openweathermap.org/img/wn/" +
                  props.cityData.weather[0]["icon"] +
                  "@2x.png"
                : null
            }
            alt="weather"
            className={styles.weather__img}
          />
          <h2 className={styles.weather__description}>
            {props.cityData
              ? props.cityData.weather[0]["description"]
              : "No data"}
          </h2>
        </div>
        <div className={styles.temperature__container}>
          <p className={styles.temperature}>
            {props.cityData
              ? Math.round(props.cityData.main.temp - 273) + "°С"
              : "No data"}
          </p>

          <Settings data={props.cityData} />
          <div className={styles.save__icon__container}>
            <img
              src={SaveIco}
              className={styles.save__icon__img}
              onClick={props.saveCity}
              alt="weather logo"
            />
            <props.save />
          </div>
        </div>
      </div>
    );
  }
}

export default byCityName;
