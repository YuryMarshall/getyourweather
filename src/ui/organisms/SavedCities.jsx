import React from "react";
import { useState, useEffect, useCallback } from "react";

import SavedCity from "../molecules/GetSavedCity.jsx";
import CityInput from "../atoms/CitySearchInput.jsx";

import styles from "./styles/savedcities.module.css";
import "../../App.css";

function MyCities(props) {
  const mySavedCities = localStorage.getItem("savedCities");
  const [selectedCity, selectCity] = useState("");
  const [filtered, setFiltered] = useState(mySavedCities.split(","));
  const [inputSearch, setInputSearch] = useState("");
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const inputHandler = (e) => {
    setInputSearch(e.target.value);
  };
  const filterSearch = (symbol) => {
    return mySavedCities.split(",").filter((data) => {
      return data.toLocaleLowerCase().indexOf(symbol.toLocaleLowerCase()) > -1;
    });
  };
  const showCity = (e) => {
    selectCity(e.target.textContent);
  };
  const delCity = (e) => {
    const arr = mySavedCities.split(",");
    const newArr = arr.filter(function (f) {
      return f !== e.target.id;
    });
    localStorage.setItem("savedCities", newArr);
    setFiltered(newArr);
  };

  useEffect(() => {
    const filter = filterSearch(inputSearch);
    setFiltered(filter);
  }, [inputSearch]);

  if (mySavedCities) {
    const citiesArr = filtered;

    return (
      <div className={styles.saved__cities__page}>
        <h1 className={styles.title}>Saved cities:</h1>
        <div className={styles.saved__cities__container}>
          <div className={styles.search__container}>
            <CityInput value={inputSearch} handler={inputHandler} />
            <div id="savedcities" className={styles.search__container__cities}>
              {citiesArr.map((item, index) => {
                return (
                  <div className={styles.search__container__city} key={index}>
                    <p onClick={showCity}>{citiesArr[index]}</p>
                    <div
                      className={styles.delete__button}
                      onClick={delCity}
                      id={citiesArr[index]}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.saved__city__container}>
            <SavedCity city={selectedCity} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div className={styles.nocities__container}>No saved cities</div>;
  }
}

export default MyCities;
