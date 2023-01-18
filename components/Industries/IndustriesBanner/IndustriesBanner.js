import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaAngleRight } from 'react-icons/fa';

const IndustriesBanner = () => {
  const router = useRouter();
    return (
      <div>
        <div className="h-[26rem] relative bg-primary w-[100vw] flex justify-center items-center">
          <h3 style={{ fontSize: "40px" }} className="text-white font-bold ">
            Industries
          </h3>
        </div>
        <div className="text-white font-bold text-base flex items-center gap-4 absolute top-[3%] left-[5%]">
          {/* <Link>Home</Link>
          
            <FaAngleRight />
         
            {" "}
            <Link>Industries</Link> */}
          <p className="cursor-pointer" onClick={() => router.push("/")}>
            Home
          </p>
          <FaAngleRight />
          <p
            className="cursor-pointer"
            onClick={() => router.push("/industries")}
          >
            Industries
          </p>
        </div>
      </div>
    );
};

export default IndustriesBanner;