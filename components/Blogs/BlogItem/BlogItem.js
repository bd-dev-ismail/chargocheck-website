import img1 from '/assets/blog/image 10.png';
import img2 from '/assets/blog/image 10 (1).png';
import img3 from '/assets/blog/image 10 (2).png';
import img4 from '/assets/blog/image 10 (3).png';
import img5 from '/assets/blog/image 10 (4).png';
import img6 from '/assets/blog/image 10 (5).png';
import icon from '/assets/icon/shareIcon.png';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogItem = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://cms.cargocheck.com/api/blogs?populate=*')
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, []);
  console.log(blogs, 'blog');

  return (
    <>
      {blogs.map((item, idx) => (
        <Link href={'/blog-details'} key={idx}>
          <div className="card card-compact my-5 relative w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={`https://cms.cargocheck.com${item?.attributes?.dispayImage?.data?.attributes?.url}`} />
            </figure>
            <div className="card-body">
              <p className="text-secondary font-light mb-2">{item?.attributes?.readTime} read</p>
              <h2 className="card-title font-bold pb-2 text-primary" style={{ fontSize: '2rem' }}>
                {item.attributes?.title}
              </h2>
              <p className="text-secondary font-light text-xl">{item.attributes?.shortDescription}</p>
              <p className="text-secondary font-bold py-6">Jan, 01 2023</p>
              <div>
                <img src={icon.src} alt="" className="absolute top-[5%] right-5" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BlogItem;
