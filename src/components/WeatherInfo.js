import React from "react";
import styles from "@/styles/Home.module.css";

const WeatherInfo = ({ status }) => {
  console.log(status);
  return (
    <>
      {typeof status.main != "undefined" && (
        <div className={styles.info}>
          <div className={styles.city}>
            {status.name}, {status.sys.country}
          </div>
          <div className={styles.detail}>
            <div className={styles.degree}>
              {Math.round(status.main.temp)} °C
            </div>
            <div className={styles.status}>{status.weather[0].description}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherInfo;
