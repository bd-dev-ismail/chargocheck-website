import banner from '/assets/banner.png';
import {FaArrowRight} from 'react-icons/fa';
const Banner = () => {
    return (
      <div
        className="lg:h-[78vh] h-[65vh] w-full relative"
        style={{
          backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 30%) 0%, rgba(255, 255, 255, 0) 55.59%), url(${banner.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-white absolute px-5 lg:px-0 top-[10%] lg:left-[17%] lg:top-[30%]">
          <h3
            className="text-3xl lg:text-5xl  font-bold mb-4"
            style={{ lineHeight: "104.99%" }}
          >
            Fastrack Safer <br /> Chemical Logistics <br /> with CargoCheckTM
          </h3>
          <p className="text-xl font-light mb-9">
            Easily customize and share delivery instructions for bulk <br /> &
            packaged chemicals, know ETAs, and confirm the <br /> right product
            with electronic proof of delivery
          </p>
          <a
            href="/"
            className="font-normal text-base btn btn-primary rounded-full text-white"
          >
            Find Out How <FaArrowRight className="ml-3" />
          </a>
        </div>
      </div>
    );
};

export default Banner;