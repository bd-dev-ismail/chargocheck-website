import GetStartedItem from "./GetStartedItem";

const GetStarted = () => {
  return (
    <div className="mt-[2rem] mb-[4rem]">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3
          style={{ fontSize: "32px" }}
          className="text-primary font-bold mb-4"
        >
          Simple Steps to Safer Shipments
        </h3>
        <p className="text-xl font-light">
          CargoCheck is designed to readily complement your existing ERP, TMS,
          and in-house databases. We work with your team to ensure seamless,
          secure data sharing with only the partners you choose with these easy
          steps
        </p>
      </div>
      <div>
        <GetStartedItem />
      </div>
    </div>
  );
};

export default GetStarted;
