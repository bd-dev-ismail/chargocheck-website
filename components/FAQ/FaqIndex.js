import Footer from "../Footer/Footer";
import LetUs from "../Industries/LetUs/LetUs";
import Navbar from "../Navbar/Navbar";
import FaqBanner from "./FaqBanner/FaqBanner";
import FaqCollapse from "./FaqCollapse/FaqCollapse";


const FaqIndex = () => {
    return (
      <div className="bg-white">
        <div>
          <Navbar/>
        </div>
       <div>
        <FaqBanner/>
        </div> 
        <div>
          <FaqCollapse/>
        </div>
        <div>
          <LetUs/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
};

export default FaqIndex;