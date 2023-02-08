import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Function from "./Function/Function";
import IndustriesBanner from "./IndustriesBanner/IndustriesBanner";
import IndustriesSections from "./IndustriesSections/IndustriesSections";
import LetUs from "./LetUs/LetUs";

const Industries = () => {
    return (
      <div>
        <div className="bg-white">
          <div>
            <Navbar />
          </div>
          <div>
            <IndustriesBanner />
          </div>
          <div>
            <IndustriesSections />
          </div>
          <div>
            <Function />
          </div>
          <div>
            <LetUs />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
};

export default Industries;