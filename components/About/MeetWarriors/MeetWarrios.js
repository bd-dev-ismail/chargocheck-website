import Warriors from "./Warriors";

const MeetWarrios = () => {
    return (
      <div className="mt-[5rem] mb-[3rem] bg-white">
        <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h3 className="text-primary text-3xl font-bold mb-4">
            Meet Our Warriors
          </h3>
          <p className="text-xl font-light px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            habitasse vitae sit <br /> urna. Quam volutpat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. <br /> Arcu habitasse vitae
            sit urna. Quam volutpat.
          </p>
        </div>
        <div className=" mx-auto my-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Warriors />
        </div>
      </div>
    );
};

export default MeetWarrios;