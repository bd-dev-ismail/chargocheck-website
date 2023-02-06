import BlogItem from "../BlogItem/BlogItem";

const AllBlogs = () => {
  return (
    <div className="mx-auto my-[6rem] sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div>
        <h3
          className="text-primary px-4 lg:px-0 font-bold"
          style={{ fontSize: "40px" }}
        >
          All Blogs
        </h3>
      </div>
      <div className=" mx-auto my-10 sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BlogItem />
      </div>
    </div>
  );
};

export default AllBlogs;
