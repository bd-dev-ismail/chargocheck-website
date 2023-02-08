import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import img1 from "../../../assets/banner-images/img1.png";
import img2 from "../../../assets/banner-images/img2.png";
import img3 from "../../../assets/banner-images/img3.png";
import img4 from "../../../assets/banner-images/img4.png";
import img5 from "../../../assets/banner-images/img5.png";
import img6 from "../../../assets/banner-images/img6.png";
import vertical1 from "../../../assets/banner-images/vertical1.png";
import vertical2 from "../../../assets/banner-images/vertical2.png";
// import NewsTicker from "react-advanced-news-ticker";
const VerticalBanner = () => {
  return (
    <div
      style={{
        background: "linear-gradient(255.37deg, #003366 0%, #3298FF 100%)",
      }}
      className="lg:h-[78vh] h-[80vh]  w-full "
    >
      <div className="flex  px-4 py-8 lg:py-10 items-center justify-center lg:justify-evenly text-white">
        <div className="text-white ml-5">
          <h3
            className="text-3xl lg:text-5xl  font-bold my-4"
            style={{ lineHeight: "125.99%" }}
          >
            Fastrack Safer <br /> Chemical Logistics <br /> with CargoCheck{" "}
            <sup>TM</sup>
          </h3>
          <p className="text-xl font-light mb-9 py-3">
            Easily customize and share delivery instructions for bulk <br /> &
            packaged chemicals, know ETAs, and confirm the <br /> right product
            with electronic proof of delivery
          </p>

          <Link
            href="/contact"
            className="font-bold w-[10rem] normal-case flex items-center justify-center border-white text-base px-3 py-4 bg-white rounded-full text-primary"
          >
            Find out how <FaArrowRight className="ml-1" />
          </Link>
        </div>
        <div className=" lg:h-[73.2vh] flex items-center gap-4">
          {/* <NewsTicker
            rowHeight={100}
            maxRows={20}
            speed={600}

            // direction={Directions.UP}
            duration={4000}
            autoStart={true}
            pauseOnHover={false}
            id="myId"
            className=" lg:h-[90.8vh] w-full gap-4 grid grid-col-2"
          >
            <img src={img1.src} alt="" />
            <img src={vertical1.src} alt="" className="my-2" />
            <img src={img3.src} alt="" className="my-2" />
            <img src={img5.src} alt="" className="my-2" />
            <img src={img2.src} alt="" className="my-2" />

            <img src={img2.src} alt="" />
            <img src={vertical2.src} alt="" className="my-2" />
            <img src={img4.src} alt="" className="my-2" />
            <img src={img6.src} alt="" className="my-2" />
            <img src={img1.src} alt="" className="my-2" />
          </NewsTicker> */}
          <div>
            <img src={img1.src} alt="" />
            <img src={vertical1.src} alt="" className="my-2" />
            <img src={img3.src} alt="" className="my-2" />
            <img src={img5.src} alt="" className="my-2" />
            <img src={img2.src} alt="" className="my-2" />
          </div>
          <div>
            <img src={img2.src} alt="" />
            <img src={vertical2.src} alt="" className="my-2" />
            <img src={img4.src} alt="" className="my-2" />
            <img src={img6.src} alt="" className="my-2" />
            <img src={img1.src} alt="" className="my-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBanner;
