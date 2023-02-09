import icon1 from "/assets/icon/Chemical.png";
import icon2 from "/assets/icon/manufacturing.png";
import icon3 from "/assets/icon/government.png";
import icon4 from "/assets/icon/transportation.png";
import { useState } from "react";
const IndustriesServe = () => {
  const [btn, setBtn] = useState("Step 1");
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
    <div className="mt-[5rem] mb-[3rem]">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3
          style={{ fontSize: "32px" }}
          className="text-primary  font-bold mb-4"
        >
          Industries We Serve
        </h3>
        <p className="text-xl font-light">
          CargoCheck helps logistics and manufacturing professionals go home{" "}
          <br />
          safely after a productive day.
        </p>
      </div>
      <div className="lg:grid hidden grid-cols-1 lg:grid-cols-2 my-[2rem] gap-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        {itemList.map((item, idx) => (
          <div
            style={{
              background: "rgba(50, 152, 255, 0.05)",
              backdropFilter: "blur(5px)",
            }}
            key={idx}
            className="my-10 p-5  rounded-lg flex flex-col justify-center lg:justify-start lg:items-start items-center"
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
      <div className="mx-auto mt-[3rem] px-8 lg:hidden  sm:max-w-xl md:max-w-full">
        <div>
          {btn === "Step 1" && (
            <div
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              className=" p-5 rounded-lg"
            >
              <img src={icon1.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Chemical Suppliers
              </h3>
              <p className="text-secondary text-sm">
                Chemical cargo requires precision handling for every delivery.
                CargoCheck helps you keep track of what's unique about each
                combination of product, plant, and people.
              </p>
            </div>
          )}
          {btn !== "Step 1" && (
            <h3
              onClick={() => setBtn("Step 1")}
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              className="text-primary mb-5  p-5 font-bold rounded-lg"
            >
              Chemical Suppliers
            </h3>
          )}

          {btn === "Step 2" && (
            <div
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              className=" p-5 rounded-lg"
            >
              <img src={icon2.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Manufacturing
              </h3>
              <p className="text-secondary text-sm">
                CargoCheck templates help you clearly communicate your
                expectations in a consistent format, improving the odds of safe,
                smooth deliveries.
              </p>
            </div>
          )}
          {btn !== "Step 2" && (
            <h3
              onClick={() => setBtn("Step 2")}
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              className="text-primary my-5  p-5 font-bold rounded-lg"
            >
              Manufacturing
            </h3>
          )}
          {btn === "Step 3" && (
            <div
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              className=" p-5 rounded-lg"
            >
              <img src={icon3.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Goverment
              </h3>
              <p className="text-secondary text-sm">
                Agencies like water & wastewater have extra public safety
                responsibility. CargoCheck improves traceability and reduces
                risks.
              </p>
            </div>
          )}
          {btn !== "Step 3" && (
            <h3
              onClick={() => setBtn("Step 3")}
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              className="text-primary my-5  p-5 font-bold rounded-lg"
            >
              Goverment
            </h3>
          )}
          {btn === "Step 4" && (
            <div
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              className=" p-5 rounded-lg"
            >
              <img src={icon4.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Transportation
              </h3>
              <p className="text-secondary text-sm">
                Safety is job one for transporting chemicals. CargoCheck is the
                only how to handle products and paperwork app designed from a
                driver-first perspective.
              </p>
            </div>
          )}
          {btn !== "Step 4" && (
            <h3
              style={{
                background: "rgba(50, 152, 255, 0.05)",
                backdropFilter: "blur(5px)",
                fontSize: "14px",
              }}
              onClick={() => setBtn("Step 4")}
              className="text-primary my-5  p-5 font-bold rounded-lg"
            >
              Transportation
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustriesServe;
