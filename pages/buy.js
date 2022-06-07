import Head from "next/head";
import React from "react";
import Layout from "../src/components/Layout/Layout";
import Hero from "../src/sections/buy/Hero/Hero";
import MinuteTable from "../src/sections/buy/MinuteTable/MinuteTable";

const Buy = () => {
  return (
    <>
      <Head>
        <title>Buy - Non Fungible Minutes</title>
      </Head>
      <Layout>
        <Hero />
        <MinuteTable />
      </Layout>

      <style jsx>{`
        .Buy {
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Buy;
