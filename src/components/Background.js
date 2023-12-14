import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import FetchImage from "./FetchImage";

const Background = ({ backgroundImage }) => {
  console.log(typeof backgroundImage);

  return (
    <div className={styles.background}>
      <FetchImage durum={backgroundImage} />
    </div>
  );
};

export default Background;
