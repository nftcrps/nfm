import Head from "next/head";
import React from "react";
import Layout from "../src/components/Layout/Layout";
import Hero from "../src/sections/utilities/Hero/Hero";
import UtilityCards from "../src/sections/utilities/UtilityCards/UtilityCards";

const Utilities = () => {
  return (
    <>
    <Head>
        <title>Utilities - Non Fungible Minutes</title>
    </Head>
      <Layout>
          <Hero />
          <UtilityCards />
      </Layout>
    </>
  );
};

export default Utilities;
