import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/banner-images/img1.png";
import img2 from "../../../assets/banner-images/img2.png";
import img3 from "../../../assets/banner-images/img3.png";
import img4 from "../../../assets/banner-images/img4.png";
import img5 from "../../../assets/banner-images/img5.png";
import img6 from "../../../assets/banner-images/img6.png";
import vertical1 from "../../../assets/banner-images/vertical1.png";
import vertical2 from "../../../assets/banner-images/vertical2.png";
const VerticalSlider = () => {
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
    <div>
      <Slider {...settings}>
        <div className="flex  gap-4">
          <img src={img1.src} alt="" />

          <img src={img2.src} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default VerticalSlider;
