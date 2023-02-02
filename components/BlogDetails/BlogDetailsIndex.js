import React from "react";
import Footer from "../Footer/Footer";
import LetUs from "../Industries/LetUs/LetUs";
import Navbar from "../Navbar/Navbar";
import DetailsContent from "./DetailsContent";

const blogDetailsIndex = () => {
  return (
    <div className="bg-white">
      <div>
        <Navbar />
      </div>
      <div>
        <DetailsContent />
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

export default blogDetailsIndex;
