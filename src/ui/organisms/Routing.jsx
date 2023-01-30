import React from "react";
import "../../App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./Header.jsx";
import Settings from "./Settings.jsx";
import MyCities from "./SavedCities.jsx";
import MainPage from "./Main.jsx";

function App() {
  const toBoolean = (val) => val === "true";
  const startSettings = localStorage.getItem("settings");
  const defineSettings = () => {
    if (startSettings) {
      return startSettings.split(",");
    } else {
      return [];
    }
  };
  const [humidity, setHumidity] = useState(toBoolean(localStorage.Humidity));
  const [sunset, setSunset] = useState(toBoolean(localStorage.Sunset));
  const [sunrise, setSunrise] = useState(toBoolean(localStorage.Sunrise));
  const [feelstemp, setFeelstemp] = useState(toBoolean(localStorage.Feels));
  const [settings, setSettings] = useState(defineSettings());

  const addSetting = (targetValue, checkStatus) => {
    if (!settings.includes(targetValue) && checkStatus === true) {
      setSettings([...settings, targetValue]);
    } else {
      const newSettings = settings.filter(function (f) {
        return f !== targetValue;
      });
      setSettings(newSettings);
    }
  };

  const tooggleCheckboxValue = (target, value) => {
    localStorage.setItem(target, value);
    switch (target) {
      case "Humidity":
        setHumidity(value);
        break;
      case "Sunset":
        setSunset(value);
        break;
      case "Sunrise":
        setSunrise(value);
        break;
      case "Feels":
        setFeelstemp(value);
        break;
    }
  };
  const checkboxHandler = (e) => {
    const targetName = e.target.id;
    const value = e.target.checked;
    tooggleCheckboxValue(targetName, value);
    addSetting(targetName, value);
  };
  useEffect(() => {
    if (humidity || sunset || sunrise || feelstemp) {
      localStorage.setItem("settings", [settings]);
    } else {
      localStorage.removeItem("settings");
    }
  }, [settings]);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/settings"
          element={
            <Settings
              humidityStatus={humidity}
              sunsetStatus={sunset}
              sunriseStatus={sunrise}
              feelsStatus={feelstemp}
              change={checkboxHandler}
            />
          }
        />
        <Route path="/mycities" element={<MyCities />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
