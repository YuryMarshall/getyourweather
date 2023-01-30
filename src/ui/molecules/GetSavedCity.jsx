import React from "react";
import { useState, useEffect } from "react";

import Settings from "../atoms/SettingConstructor.jsx";

import styles from "./styles/getsavedcity.module.css";

function SavedCity(props) {
  const [cityData, changeCity] = useState(null);

  const apiLink = () => {
    let adress =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      props.city +
      "&appid=0a559540ef937280cdde51f15160a2fb";

    return adress;
  };

  const apiRequest = () => {
    fetch(apiLink())
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        if (data.cod === "404" || data.cod === "400") {
          console.log(data.message);

          changeCity(null);
        } else {
          changeCity(data);
        }
      });
  };
  useEffect(() => {
    if (props.city) {
      apiLink();
      apiRequest();
    }
  }, [props.city]);

  const Render = () => {
    if (cityData === null) {
      return;
    } else {
      return (
        <div className={styles.weather__container}>
          <div className={styles.name__container}>
            <h1 className={styles.city__name}>
              {cityData ? cityData.name : "No data"}
            </h1>
            <img
              src={
                cityData
                  ? "https://openweathermap.org/img/wn/" +
                    cityData.weather[0]["icon"] +
                    "@2x.png"
                  : null
              }
              alt="weather"
              className={styles.weather__img}
            />
            <h2 className={styles.weather__description}>
              {cityData ? cityData.weather[0]["description"] : "No data"}
            </h2>
          </div>
          <div className={styles.temperature__container}>
            <div className={styles.temperature}>
              {cityData
                ? Math.round(cityData.main.temp - 273) + "°С"
                : "No data"}
            </div>

            <Settings data={cityData} />
          </div>
        </div>
      );
    }
  };
  return <Render />;
}

export default SavedCity;
