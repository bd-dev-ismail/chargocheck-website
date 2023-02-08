import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa";
const BlogBanner = () => {
  const router = useRouter();
  return (
    <div>
      <div className="h-[26rem] relative bg-primary w-[100vw] flex justify-center items-center">
        <h3 style={{ fontSize: "40px" }} className="text-white font-bold ">
          Blogs
        </h3>
      </div>
      <div className="text-white font-bold text-base flex items-center gap-4 absolute top-[15%] left-[5%]">
        {/* <Link>Home</Link>
          
            <FaAngleRight />
         
            {" "}
            <Link>Industries</Link> */}
        <a className="cursor-pointer" onClick={() => router.push("/")}>
          Home
        </a>
        <FaAngleRight />
        <a
          className="cursor-pointer"
          onClick={() => router.push("/industries")}
        >
          Resources
        </a>
      </div>
    </div>
  );
};

export default BlogBanner;
