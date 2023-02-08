import PlatformItem from "./PlatformItem";

const Platfrom = () => {
    return (
      <div className="mt-[2rem] mb-[4rem]">
        <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h3
            style={{ fontSize: "32px" }}
            className="text-primary font-bold mb-4"
          >
            CargoCheck Platform
          </h3>
          <p className="text-xl font-light">
            Access the vetted, member’s only network of trusted chemical
            suppliers, manufacturers, <br /> municipalities, and transportation
            pros who put safety first for every shipment.
          </p>
        </div>
        <div>
          <PlatformItem />
        </div>
      </div>
    );
};

export default Platfrom;