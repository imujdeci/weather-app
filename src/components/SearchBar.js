import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

const SearchBar = ({ setQuery }) => {
  const apiKey = "ab122c3749ab19c9ff74bdd770f5fe92";
  const apiBase = `https://api.openweathermap.org/data/2.5/weather`;
  const [city, setCity] = useState("");

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${apiBase}?q=${city}&lang=tr&units=metric&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          setCity("");
          setQuery(data);
        });
    }
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Şehir Adı Girin"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={search}
      ></input>
    </div>
  );
};

export default SearchBar;
