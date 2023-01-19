import Footer from "../Footer/Footer";
import LetUs from "../Industries/LetUs/LetUs";
import Navbar from "../Navbar/Navbar";
import AllBlogs from "./AllBlogs/AllBlogs";
import BlogBanner from "./BlogBanner/BlogBanner";

const BlogIndex = () => {
    return (
      <div className="bg-white">
        <div>
          <Navbar />
        </div>
        <div>
            <BlogBanner/>
        </div>
        <div>
            <AllBlogs/>
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

export default BlogIndex;