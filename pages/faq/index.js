import FaqIndex from "@/components/FAQ/FaqIndex";
import Head from "next/head";
const index = () => {
  return (
    <div>
      <Head>
        <title>Chargocheck -FAQ</title>
      </Head>
      <div>
        <FaqIndex/>
      </div>
    </div>
  );
};

export default index;
