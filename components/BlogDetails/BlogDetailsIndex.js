import React from "react";
import Footer from "../Footer/Footer";
import LetUs from "../Industries/LetUs/LetUs";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
import DetailsContent from "./DetailsContent";

const BlogDetailsIndex = ({ singleBlog, loading }) => {
  return (
    <div className="bg-white">
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center">
        {loading && <Loader />}
      </div>
      <div>
        <DetailsContent singleBlog={singleBlog} />
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

export default BlogDetailsIndex;
