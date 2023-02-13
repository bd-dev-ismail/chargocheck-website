import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import img1 from "../../../assets/banner-images/img1.png";
import img2 from "../../../assets/banner-images/img2.png";
import img3 from "../../../assets/banner-images/img3.png";
import img4 from "../../../assets/banner-images/img4.png";
import img5 from "../../../assets/banner-images/img5.png";
import img6 from "../../../assets/banner-images/img6.png";
import vertical1 from "../../../assets/banner-images/vertical1.png";
import vertical2 from "../../../assets/banner-images/vertical2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const VerticalBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 500,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
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

        <div className=" lg:h-[68.2vh]">
          <div className="flex items-center gap-4">
            <img src={img1.src} alt="" className="h-[120px]" />
            <img src={img2.src} alt="" />
            {/* <img src={vertical1.src} alt="" className="my-2" />
              <img src={img3.src} alt="" className="my-2" />
              <img src={img5.src} alt="" className="my-2" />
              <img src={img2.src} alt="" className="my-2" /> */}
          </div>
          <div className="flex items-center gap-4 mt-2">
            <img src={vertical1.src} alt="" className="-mt-20"/>
            <img src={vertical2.src} alt="" />
            {/* <img src={img3.src} alt="" className="my-2" />
              <img src={img5.src} alt="" className="my-2" />
              <img src={img2.src} alt="" className="my-2" /> */}
          </div>

          <div>
            {/* <img src={img4.src} alt="" className="my-2" />
              <img src={img6.src} alt="" className="my-2" />
              <img src={img1.src} alt="" className="my-2" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBanner;
