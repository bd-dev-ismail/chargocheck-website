import icon1 from "/assets/icon/Chemical.png";
import icon2 from "/assets/icon/manufacturing.png";
import icon3 from "/assets/icon/government.png";
import icon4 from "/assets/icon/transportation.png";
const Function = () => {
  const itemList = [
    {
      name: "Chemical Suppliers",
      desc: "Chemical cargo requires precision handling for every delivery. CargoCheck helps you keep track of what's unique about each combination of product, plant, and people.",
      icon: icon1,
    },
    {
      name: "Manufacturing",
      desc: "CargoCheck templates help you clearly communicate your expectations in a consistent format, improving the odds of safe, smooth deliveries.",
      icon: icon2,
    },
    {
      name: "Government",
      desc: "Agencies like water & wastewater have extra public safety responsibility. CargoCheck improves traceability and reduces risks.",
      icon: icon3,
    },
    {
      name: "Transportation",
      desc: "Safety is job one for transporting chemicals. CargoCheck is the only how to handle products and paperwork app designed from a driver-first perspective.",
      icon: icon4,
    },
  ];
  return (
    <div className="mt-[5rem] mb-[3rem] bg-white">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3
          style={{ fontSize: "32px" }}
          className="text-primary  font-bold mb-4"
        >
          Functions
        </h3>
        <p className="text-xl font-light">
          Our team offers services to different functional teams of the industry
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-[2rem] gap-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
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

export default Function;
