import PlatformItem from "./PlatformItem";

const Platfrom = () => {
    return (
      <div className="mt-[2rem] mb-[4rem]">
        <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h3
            style={{ fontSize: "32px" }}
            className="text-primary font-bold mb-4"
          >
            The Pocket Tool for Precise Deliveries
          </h3>
          <p className="text-xl font-light">
            Support Drivers and Operators 24/7 with this powerful pocket
            reference for what makes a perfect delivery for each unique paring
            of product, place, procedure, paperwork, and people.
          </p>
        </div>
        <div>
          <PlatformItem />
        </div>
      </div>
    );
};

export default Platfrom;