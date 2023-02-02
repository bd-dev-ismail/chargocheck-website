import img1 from "/assets/blog/image 10.png";
import img2 from "/assets/blog/image 10 (1).png";
import img3 from "/assets/blog/image 10 (2).png";
import img4 from "/assets/blog/image 10 (3).png";
import img5 from "/assets/blog/image 10 (4).png";
import img6 from "/assets/blog/image 10 (5).png";
import icon from "/assets/icon/shareIcon.png";
import { useEffect, useState } from "react";

const BlogItem = () => {
  const [blogs, setBlogs] = useState([]);
  const blogImg = [
    {
      img: img1,
      readTime: "5min",
      title: "The Wildlife",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio cum, repudiandae",
      publishDate: "Jan, 01 2023",
    },
    {
      img: img2,
      readTime: "5min",
      title: "The Wildlife",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio cum, repudiandae",
      publishDate: "Jan, 01 2023",
    },
    {
      img: img3,
      readTime: "5min",
      title: "The Wildlife",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio cum, repudiandae",
      publishDate: "Jan, 01 2023",
    },
    {
      img: img4,
      readTime: "5min",
      title: "The Wildlife",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio cum, repudiandae",
      publishDate: "Jan, 01 2023",
    },
    {
      img: img5,
      readTime: "5min",
      title: "The Wildlife",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio cum, repudiandae",
      publishDate: "Jan, 01 2023",
    },
    {
      img: img6,
      readTime: "5min",
      title: "The Wildlife",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio cum, repudiandae",
      publishDate: "Jan, 01 2023",
    },
  ];
  useEffect(()=> {
    fetch("http://40.76.241.63/api/blogs")
    .then(res => res.json())
    .then(data => setBlogs(data.data))
  },[])
  return (
    <>
      {blogImg.map((item, idx) => (
        <div
          className="card card-compact my-5 relative w-96 bg-base-100 shadow-xl"
          key={idx}
        >
          <figure>
            <img src={item.img.src} />
          </figure>
          <div className="card-body">
            <p className="text-secondary font-light mb-2">
              {item.readTime} read
            </p>
            <h2
              className="card-title font-bold pb-2 text-primary"
              style={{ fontSize: "2rem" }}
            >
              {item.title}
            </h2>
            <p className="text-secondary font-light text-xl">{item.desc}</p>
            <p className="text-secondary font-bold py-6">{item.publishDate}</p>
            <div>
              <img
                src={icon.src}
                alt=""
                className="absolute top-[5%] right-5"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogItem;
