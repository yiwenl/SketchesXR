// import Image from "next/image";
import styles from "./page.module.css";
import SiteData from "./model/data";

// components
import Header from "./components/Header";

export default async function Home() {
  const { experiments } = await getData();

  const data = experiments.concat();
  data.reverse();

  return (
    <main className={styles.main}>
      <Header />
      <h1>Sketches - XR</h1>
      <hr />

      {data.map((item, index) => {
        return <p key={index}>{item.title}</p>;
      })}
    </main>
  );
}

async function getData() {
  return {
    experiments: SiteData,
  };
}
