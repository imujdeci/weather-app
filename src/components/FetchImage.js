import Image from "next/image";
import styles from "@/styles/Home.module.css";
import rainy from "../../public/rainy.jpg";
import cloudy from "../../public/cloudy.jpg";
import snowy from "../../public/snowy.jpg";
import stormy from "../../public/storm.png";
import sunny from "../../public/sunny.jpg";
import misty from "../../public/misty.jpg";
import rainbow from "../../public/rainbow-weather.jpg";
import parcali from "../../public/parcaliBulutlu.jpg";

const FetchImage = ({ durum }) => {
  console.log(durum);
  console.log(typeof durum);

  if (parseInt(durum) === 701) {
    console.log("girdi");
  }

  switch (durum) {
    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
    case 511:
    case 520:
    case 521:
    case 522:
    case 531:
      return (
        <Image
          className={styles.backgroundImage}
          src={rainy}
          alt="yagmurlu hava"
        />
      );

    case 800:
      return (
        <Image
          className={styles.backgroundImage}
          src={sunny}
          alt="gunesli hava"
        />
      );

    case 701:
      return (
        <Image
          className={styles.backgroundImage}
          src={misty}
          alt="sisli hava"
        />
      );

    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return (
        <Image
          className={styles.backgroundImage}
          src={snowy}
          alt="karli hava"
        />
      );

    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 232:
      return (
        <Image
          className={styles.backgroundImage}
          src={stormy}
          alt="firtinali hava"
        />
      );

    case 801:
    case 802:
    case 803:
    case 804:
      return (
        <Image
          className={styles.backgroundImage}
          src={cloudy}
          alt="bulutlu hava"
        />
      );

    default:
      return (
        <Image
          className={styles.backgroundImage}
          src={rainbow}
          alt="hava durumu"
        />
      );
  }
};

export default FetchImage;
