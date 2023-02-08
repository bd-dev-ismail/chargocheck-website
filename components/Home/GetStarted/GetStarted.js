import GetStartedItem from "./GetStartedItem";

const GetStarted = () => {
  return (
    <div className="mt-[2rem] mb-[4rem]">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3
          style={{ fontSize: "32px" }}
          className="text-primary font-bold mb-4"
        >
          Get Started
        </h3>
        <p className="text-xl font-light">
          Join CargoCheck Platform to manage logistics
        </p>
      </div>
      <div>
        <GetStartedItem />
      </div>
    </div>
  );
};

export default GetStarted;
