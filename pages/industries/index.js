import Head from "next/head";
import Industries from "@/components/Industries/Industries";

const index = () => {
  return (
    <div>
      <Head>
        <title>Chargocheck -Industries</title>
      </Head>
      <div>
        <Industries />
      </div>
    </div>
  );
};

export default index;
