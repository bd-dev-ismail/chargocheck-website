import LetUs from "../Industries/LetUs/LetUs";
import Banner from "./Banner/Banner";
import GetStarted from "./GetStarted/GetStarted";
import IndustriesServe from "./IndustriesServe/IndustriesServe";
import ModesWeServe from "./ModesWeServe/ModesWeServe";
import Platfrom from "./Platfrom/Platfrom";
import VerticalBanner from "./VerticalBanner/VerticalBanner";
import VerticalSlider from "./VerticalBanner/VerticalSlider";
import WhyCargocheck from "./WhyCargocheck/WhyCargocheck";

const HomeIndex = () => {
  return (
    <div>
      <div className="lg:hidden">
        <Banner />
      </div>
      <div className="hidden lg:block">
        <VerticalBanner />
      </div>
      {/* <div>
        <VerticalSlider />
      </div> */}
      <div>
        <WhyCargocheck />
      </div>
      <div>
        <GetStarted />
      </div>
      <div>
        <IndustriesServe />
      </div>
      <div>
        <Platfrom />
      </div>

      <div>
        <ModesWeServe />
      </div>
      <div>
        <LetUs />
      </div>
    </div>
  );
};

export default HomeIndex;
