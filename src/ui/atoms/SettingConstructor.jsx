import React from "react";

import styles from "./styles/atomstyle.module.css";

function SavedSettings(props) {
  const localStorageSettings = localStorage.getItem("settings");

  const SettingConstructor = () => {
    if (localStorageSettings) {
      const arrSettings = localStorageSettings.split(",");
      const settingsData = (value) => {
        switch (value) {
          case "Humidity":
            return props.data.main.humidity + " %";
            break;

          case "Sunrise":
            const sunrise = props.data.sys.sunrise * 1000;
            const date = new Date();
            date.setTime(sunrise);
            const sunrise_date = date.getHours() + ":" + date.getMinutes();

            return sunrise_date;
            break;

          case "Sunset":
            const sunset = props.data.sys.sunset * 1000;
            const date2 = new Date();
            date2.setTime(sunset);
            const sunset_date = date2.getHours() + ":" + date2.getMinutes();
            return sunset_date;
            break;

          case "Feels":
            return Math.round(props.data.main.feels_like - 273) + "°С";
            break;
        }
      };
      return (
        <div className={styles.settings__container}>
          {arrSettings.map((item, index) => {
            return (
              <div className={styles.setting} key={index}>
                <h3 className={styles.setting__name}>{arrSettings[index]}</h3>
                {props.data ? settingsData(arrSettings[index]) : null}
              </div>
            );
          })}
        </div>
      );
    }
  };

  return <SettingConstructor />;
}

export default SavedSettings;
