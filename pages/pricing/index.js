import PricingIndex from "@/components/Pricing/PricingIndex";
import Head from "next/head";


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
