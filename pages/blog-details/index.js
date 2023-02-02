import Head from "next/head";
import BlogDetailsIndex from "../../components/BlogDetails/BlogDetailsIndex";
const index = () => {
  return (
    <div>
      <Head>
        <title>Chargocheck -Blogs Details</title>
      </Head>
      <div>
        <BlogDetailsIndex />
      </div>
    </div>
  );
};

export default index;
