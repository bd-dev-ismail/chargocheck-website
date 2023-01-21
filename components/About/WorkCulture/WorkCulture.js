import IconBox from "../IconBox/IconBox";

const WorkCulture = () => {
    return (
      <div className="mt-[5rem] mb-[3rem] bg-white">
        <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h3
            style={{ fontSize: "32px" }}
            className="text-primary  font-bold mb-4"
          >
            Work Culture & Perks
          </h3>
          <p className="text-xl font-light px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            habitasse vitae sit urna.
          </p>
        </div>
        <div>
          <IconBox />
        </div>
      </div>
    );
};

export default WorkCulture;