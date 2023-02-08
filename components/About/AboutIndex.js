import Footer from "../Footer/Footer";
import LetUs from "../Industries/LetUs/LetUs";
import Navbar from "../Navbar/Navbar";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutChargocheck from "./AboutChargocheck/AboutChargocheck";
import MeetWarrios from "./MeetWarriors/MeetWarrios";
import Mission from "./Mission/Mission";
import OurStory from "./OurStory/OurStory";
import WorkCulture from "./WorkCulture/WorkCulture";
import WorkWithUs from "./WorkWithUs/WorkWithUs";

const AboutIndex = () => {
  return (
    <div className="bg-white">
      <div>
        <Navbar />
      </div>
      <div>
        <AboutBanner />
      </div>
      <div>
        <AboutChargocheck />
      </div>
      {/* <div>
        <OurStory />
      </div> */}
      {/* <div>
        <WorkCulture />
      </div> */}
      <div>
        <Mission />
      </div>
      <div>
        <WorkWithUs />
      </div>
      <div className="hidden lg:block">
        <MeetWarrios />
      </div>
      <div>
        <LetUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutIndex;
