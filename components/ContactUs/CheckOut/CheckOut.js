import Map from "../Map/Map";

const CheckOut = () => {
    return (
      <div className="mt-[5rem] mb-[3rem]  mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div className="text-center">
          <h3
            style={{ fontSize: "32px" }}
            className="text-primary  font-bold mb-4"
          >
            Check out our digs
          </h3>
          <p className="text-xl font-light">
            Home is where your wifi connects automatically. Here’s where ours
            does. <br /> Give us a call—or better yet—drop into our headquarters
            to say hi in person.
          </p>
        </div>
        <div className="mt-[4.25rem]">
          <Map />
        </div>
      </div>
    );
};

export default CheckOut;