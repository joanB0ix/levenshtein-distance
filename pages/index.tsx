import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Input } from "../components/common/input/Input";
import Levenshtein from "../components/levenshtein/Levenshtein";
import Prompt from "../components/prompt/Prompt";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  const [stringOne, setStringOne] = useState<string>("");
  const [stringTwo, setStringTwo] = useState<string>("");

  return (
    <div className={styles.container}>
      <Head>
        <title>Levenshtein Distance</title>
        <meta name="description" content="Levenshtein Distance demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Prompt setStringOne={setStringOne} setStringTwo={setStringTwo} />
        <Levenshtein stringOne={stringOne} stringTwo={stringTwo} />
      </main>
      <footer>
        <span>
          Made with &#10084;&#65039; by <a href="https://joanboix.dev">Joan Boix</a>
        </span>
      </footer>
    </div>
  );
};

export default Home;
