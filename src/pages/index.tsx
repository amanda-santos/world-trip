import type { NextPage } from "next";
import { ReactElement } from "react";
import Head from "next/head";

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <Head>
        <title>worldtrip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hello world
    </>
  );
};

export default Home;