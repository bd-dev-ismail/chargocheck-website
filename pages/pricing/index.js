import PricingIndex from "@/components/Pricing/PricingIndex";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <div>
      <Head>
        <title>Chargocheck -Pricing</title>
      </Head>
      <div>
        <PricingIndex />
      </div>
    </div>
  );
};

export default index;
