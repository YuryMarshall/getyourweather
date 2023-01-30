import React from "react";

import styles from "./styles/atomstyle.module.css";

function SearchForm(props) {
  return (
    <form onSubmit={props.handler} className={styles.search__form}>
      <input
        id="search"
        type="text"
        onChange={props.changerCity}
        value={props.data}
        placeholder="London"
        className={styles.search__input}
      ></input>
      <button type="submit" className={styles.search__button}>
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
