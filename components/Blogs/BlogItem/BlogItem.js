import img1 from "/assets/blog/image 10.png";
import img2 from "/assets/blog/image 10 (1).png";
import img3 from "/assets/blog/image 10 (2).png";
import img4 from "/assets/blog/image 10 (3).png";
import img5 from "/assets/blog/image 10 (4).png";
import img6 from "/assets/blog/image 10 (5).png";
import icon from "/assets/icon/shareIcon.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";

const BlogItem = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    setLoading(true);
    fetch(`${url}/api/blogs?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.data);
        setLoading(false);
      });
  }, []);

  console.log(blogs);
  return (
    <>
      {loading && <Loader />}
      {blogs.map((item, idx) => (
        <Link href={`/blog/${item.id}`} key={idx}>
          <div
            style={{
              background: "rgba(50, 152, 255, 0.05)",
              backdropFilter: "blur(5px)",
            }}
            className="card px-4 lg:px-0  rounded-lg  card-compact my-5 relative w-96  shadow-xl"
          >
            <figure>
              <img
                src={`${url}${item?.attributes?.dispayImage?.data?.attributes?.url}`}
              />
            </figure>
            <div className="card-body  p-5">
              <p className="text-secondary font-light mb-2">
                {item?.attributes?.readTime} read
              </p>
              <h2
                className="card-title font-bold pb-2 text-primary"
                style={{ fontSize: "2rem" }}
              >
                {item.attributes?.title}
              </h2>
              <p className="text-secondary font-light text-xl">
                {item.attributes?.shortDescription}
              </p>
              <p className="text-secondary font-bold py-6">Jan, 01 2023</p>
              <div>
                <img
                  src={icon.src}
                  alt=""
                  className="absolute top-[5%] right-5"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BlogItem;
