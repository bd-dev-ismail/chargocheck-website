import Footer from "../Footer/Footer";
import LetUs from "../Industries/LetUs/LetUs";
import Navbar from "../Navbar/Navbar";
import Pricing from "./Pricing";
import PricingBanner from "./PricingBanner";

const PricingIndex = () => {
  return (
    <div className="bg-white">
      <div>
        <Navbar />
      </div>
      <div>
        <PricingBanner />
      </div>
      <div>
        <Pricing />
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

export default PricingIndex;
