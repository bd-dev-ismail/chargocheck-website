import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import bg from "/assets/letUs.png";
const LetUs = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className="lg:h-[23.1rem] h-[26rem] mt-[7rem]  flex justify-center items-center w-full"
    >
      <div className="text-center">
        <div>
          {" "}
          <h3
            style={{ fontSize: "40px" }}
            className="font-bold text-primary mb-7"
          >
            Map your route to safer chemical logistics
          </h3>
          
          <Link
            href="/contact"
            className="font-normal text-base btn btn-primary rounded-full text-white"
          >
             Start Here<FaArrowRight className="ml-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LetUs;
