import Head from "next/head";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import BlogDetailsIndex from "@/components/BlogDetails/BlogDetailsIndex";

const blogDetails = () => {
  const router = useRouter();
  const [singleBlog, setSingleBlog] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_URL;
  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    setLoading(true);
    fetch(`${url}/api/blogs/${router.query.id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setSingleBlog(data.data);
        setLoading(false);
      });

    // console.log(router.query.id, "data");
  }, [router.query.id, router.isReady]);
  return (
    <div>
      <Head>
        <title>Chargocheck -Blogs Details</title>
      </Head>
      
      <div>
        <BlogDetailsIndex singleBlog={singleBlog} loading={loading} />
      </div>
    </div>
  );
};

export default blogDetails;
