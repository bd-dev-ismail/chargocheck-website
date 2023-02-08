
import icon1 from "../../../assets/mission.png";
import icon2 from "../../../assets/vission.png";
import icon3 from "../../../assets/values.png";
const Mission = () => {
  const itemList = [
    {
      name: "Mission",
      desc: "To deliver trusted, easy-to-use logistics tools that save resources, save time, and empower safe teamwork.",
      icon: icon1,
    },
    {
      name: "Vission",
      desc: "Every logistics and manufacturing professional goes home safely after a productive day.",
      icon: icon2,
    },
    {
      name: "Values",
      desc: "Dignity, Curiosity, Optimism",
      icon: icon3,
    },
  ];
  return (
    <div className="mt-[5rem] mb-[3rem] bg-white">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3
          style={{ fontSize: "32px" }}
          className="text-primary  font-bold mb-4"
        >
          Mission, Vision & Values
        </h3>
        <p className="text-xl font-light px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
          habitasse <br /> vitae sit urna.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 my-[2rem] gap-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        {itemList.map((item, idx) => (
          <div
            key={idx}
            className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center"
          >
            <div>
              <img
                src={item.icon.src}
                alt=""
                className="w-[4.5rem] h-[4.5rem] text-primary"
              />
            </div>
            <h3 className="text-2xl text-primary font-bold my-5">
              {item?.name}
            </h3>
            <p
              className="text-secondary font-light text-center lg:text-start"
              style={{ fontSize: "1rem" }}
            >
              {item?.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
