import img1 from '/assets/blog/image 10.png';
import img2 from '/assets/blog/image 10 (1).png';
import img3 from '/assets/blog/image 10 (2).png';
import img4 from '/assets/blog/image 10 (3).png';
import img5 from '/assets/blog/image 10 (4).png';
import img6 from '/assets/blog/image 10 (5).png';
import icon from '/assets/icon/shareIcon.png';

const BlogItem = () => {
  const blogImg = [
    {
      img: img1
    },
    {
      img: img2
    },
    {
      img: img3
    },
    {
      img: img4
    },
    {
      img: img5
    },
    {
      img: img6
    },
    
  ]
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
              <p className="text-secondary font-light mb-2">5 min read</p>
              <h2
                className="card-title font-bold pb-2 text-primary"
                style={{ fontSize: "2rem" }}
              >
                The Wildlife
              </h2>
              <p className="text-secondary font-light text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
                Distinctio cum, repudiandae{" "}
              </p>
              <p className="text-secondary font-bold py-6">June 12, 2021</p>
              <div>
                <img src={icon.src} alt="" className='absolute top-[5%] right-5'/>
              </div>
            </div>
          </div>
        ))}
      </>
    );
};

export default BlogItem;