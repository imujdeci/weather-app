import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Background from "@/components/Background";
import SearchBar from "@/components/SearchBar";
import WeatherInfo from "@/components/WeatherInfo";

export default function Home() {
  const [query, setQuery] = useState({});
  return (
    <>
      <Head>
        <title>Hava Durumu</title>
      </Head>
      <section className={styles.app}>
        <div className={styles.title}>Hava Durumu</div>
        <SearchBar setQuery={setQuery} />

        <Background backgroundImage={query.weather && query.weather[0].id} />
        <WeatherInfo status={query} />
      </section>
    </>
  );
}
