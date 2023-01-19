import BlogIndex from "@/components/Blogs/BlogIndex";
import Head from "next/head";

const index = () => {
  return (
    <div >
      <Head>
        <title>Chargocheck -Blogs</title>
      </Head>
      <div>
        <BlogIndex />
      </div>
    </div>
  );
};

export default index;
