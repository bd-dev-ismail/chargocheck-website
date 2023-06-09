import banner from "/assets/banner.png";
import banner2 from "/assets/banner1.png";
import { FaArrowRight } from "react-icons/fa";
import iphone from "/assets/Wood-Hand.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import Link from "next/link";
// import "./Banner.css";

const Banner = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      pagination={true}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {" "}
        <div
          className="lg:h-[78vh] h-[80vh]  w-full "
          style={{
            backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 30%) 0%, rgba(255, 255, 255, 0) 55.59%), url(${banner2.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex  px-4 py-8 lg:py-10 items-center justify-center lg:justify-evenly text-white">
            <div>
              <h3
                className="text-3xl lg:text-5xl  font-bold my-4"
                style={{ lineHeight: "125.99%" }}
              >
                Fastrack Safer <br /> Chemical Logistics <br /> with CargoCheck{" "}
                <sup>TM</sup>
              </h3>
              <p className="text-xl font-light mb-9 py-3">
                Easily customize and share delivery instructions for bulk <br />{" "}
                & packaged chemicals, know ETAs, and confirm the <br /> right
                product with electronic proof of delivery
              </p>
              <Link
                href="/contact"
                className="font-normal normal-case text-base btn btn-primary rounded-full text-white"
              >
                Find out how <FaArrowRight className="ml-3" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img src={iphone.src} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <div
          className="lg:h-[78vh] h-[80vh]  w-full "
          style={{
            backgroundImage: `linear-gradient(180deg, rgb(0 0 0 / 30%) 0%, rgba(255, 255, 255, 0) 55.59%), url(${banner.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex px-4 py-5 lg:py-10 items-center justify-center lg:justify-evenly text-white">
            <div>
              <h3
                className="text-3xl lg:text-5xl  font-bold my-4"
                style={{ lineHeight: "125.99%" }}
              >
                Fastrack Safer <br /> Chemical Logistics <br /> with CargoCheck{" "}
                <sup>TM</sup>
              </h3>
              <p className="text-xl font-light mb-9 py-3">
                Easily customize and share delivery instructions for bulk <br />{" "}
                & packaged chemicals, know ETAs, and confirm the <br /> right
                product with electronic proof of delivery
              </p>
              <Link
                href="/contact"
                className="font-normal normal-case text-base btn btn-primary rounded-full text-white"
              >
                Find out how <FaArrowRight className="ml-3" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <img src={iphone.src} alt="" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
