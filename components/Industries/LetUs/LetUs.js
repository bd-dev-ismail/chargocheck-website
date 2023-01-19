import { FaArrowRight } from "react-icons/fa";
import bg from '/assets/letUs.png';
const LetUs = () => {
    return (
      <div
        style={{ backgroundImage: `url(${bg.src})`}}
        className="lg:h-[23.1rem] h-[28rem] mt-[7rem]  flex justify-center items-center w-full"
      >
        <div className="text-center">
          <div>
            {" "}
            <h3
              style={{ fontSize: "40px" }}
              className="font-bold text-primary mb-7"
            >
              Let us help you simplify your logistics
            </h3>
            <p
              style={{ fontSize: "24px" }}
              className="text-secondary font-light mb-[5rem]"
            >
              Complete solution for your logistics problems
            </p>
            <a
              href="/"
              className="font-normal text-base btn btn-primary rounded-full text-white"
            >
              Get Started <FaArrowRight className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    );
};

export default LetUs;