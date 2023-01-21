import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa";
const FaqBanner = () => {
  const router = useRouter();
  return (
    <div>
      <div className="h-[26rem] relative bg-primary w-[100vw] flex justify-center items-center">
        <h3 style={{ fontSize: "40px" }} className="text-white font-bold text-center">
          Frequently Asked <br /> Questions
        </h3>
      </div>
      <div className="text-white font-bold text-base flex items-center gap-4 absolute top-[15%] left-[5%]">
        <a className="cursor-pointer" onClick={() => router.push("/")}>
          Home
        </a>
        <FaAngleRight />
        <a
          className="cursor-pointer"
          onClick={() => router.push("/faq")}
        >
          Resources
        </a>
      </div>
    </div>
  );
};

export default FaqBanner;
