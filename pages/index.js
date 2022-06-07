import React from "react";
import Layout from "../src/components/Layout/Layout";
import Hero from "../src/sections/home/Hero/Hero";
import Guide from "../src/sections/home/Guide/Guide";
import Network from "../src/sections/home/Network/Network";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Non Fungible Minutes</title>
      </Head>
      <Layout>
        <Hero />
        <Guide />
        <Network />
      </Layout>

      <style jsx>{`
        .Home {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Home;
