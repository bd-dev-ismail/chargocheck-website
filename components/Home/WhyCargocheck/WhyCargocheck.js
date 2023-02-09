import icon1 from "/assets/icon/know.png";
import icon2 from "/assets/icon/point.png";
import icon3 from "/assets/icon/scan.png";
import icon4 from "/assets/icon/improved.png";
import { useState } from "react";
const WhyCargocheck = () => {
  const [btn, setBtn] = useState("Step 1");
  const itemList = [
    {
      name: "Know before you go",
      desc: "From pre-shipment to proof of delivery, drivers and operators have mobile access to safely guide them at each step.",
      icon: icon1,
    },
    {
      name: "Point-to-point visibility",
      desc: "Office staff can see the status of current shipments to help keep operations on track",
      icon: icon2,
    },
    {
      name: "Enhanced safety",
      desc: "Every bulk tank has its own unique CargoCheck QR code to confirm right product/right tank before unloading.",
      icon: icon3,
    },
    {
      name: "Improved efficiency",
      desc: "Clear directions communicated in a consistent format reduces the potential for confusion.",
      icon: icon4,
    },
    {
      name: "Instantly available PODs",
      desc: "Office staff can see the status of current shipments to help keep operations on track",
      icon: icon2,
    },
  ];
  return (
    <div className="mt-[5rem] mb-[3rem] px-8 lg:px-0">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3
          style={{ fontSize: "32px" }}
          className="text-primary font-bold mb-4"
        >
          Why CargoCheck
        </h3>
        <p className="text-xl font-light">
          CargoCheck logistics software connects chemical suppliers,
          manufacturers, and transporters via cloud <br /> collaboration to
          safely, efficiently handle products & paperwork. While other solutions
          can also answer “where” a <br /> truck is, CargoCheck helps everyone
          responsible for on-spec, on-time delivery know the “what” and the
          “how” for each shipment.
        </p>
      </div>
      <div className="lg:grid grid-cols-1 hidden lg:grid-cols-5 my-[2rem] gap-8 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        {itemList.map((item, idx) => (
          <div
            key={idx}
            style={{
              background: "rgba(50, 152, 255, 0.05)",
              backdropFilter: "blur(5px)",
            }}
            className="lg:my-10  px-10 py-10 flex flex-col justify-center lg:justify-start lg:items-start items-center"
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
      <div className="mx-auto mt-[3rem]  lg:hidden  sm:max-w-xl md:max-w-full">
        <div>
          {btn === "Step 1" && (
            <div className="bg-neutral p-5 rounded-lg">
              <img src={icon1.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Know before you go
              </h3>
              <p className="text-secondary text-sm">
                From pre-shipment to proof of delivery, drivers and operators
                have mobile access to safely guide them at each step.
              </p>
            </div>
          )}
          {btn !== "Step 1" && (
            <h3
              onClick={() => setBtn("Step 1")}
              style={{ fontSize: "14px" }}
              className="text-primary mb-5 bg-neutral p-5 font-bold rounded-lg"
            >
              Know before you go
            </h3>
          )}

          {btn === "Step 2" && (
            <div className="bg-neutral p-5 rounded-lg">
              <img src={icon2.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Point-to-point visibility
              </h3>
              <p className="text-secondary text-sm">
                Office staff can see the status of current shipments to help
                keep operations on track
              </p>
            </div>
          )}
          {btn !== "Step 2" && (
            <h3
              onClick={() => setBtn("Step 2")}
              style={{ fontSize: "14px" }}
              className="text-primary my-5 bg-neutral p-5 font-bold rounded-lg"
            >
              Point-to-point visibility
            </h3>
          )}
          {btn === "Step 3" && (
            <div className="bg-neutral p-5 rounded-lg">
              <img src={icon3.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Enhanced safety
              </h3>
              <p className="text-secondary text-sm">
                Every bulk tank has its own unique CargoCheck QR code to confirm
                right product/right tank before unloading.
              </p>
            </div>
          )}
          {btn !== "Step 3" && (
            <h3
              onClick={() => setBtn("Step 3")}
              style={{ fontSize: "14px" }}
              className="text-primary my-5 bg-neutral p-5 font-bold rounded-lg"
            >
              Enhanced safety
            </h3>
          )}
          {btn === "Step 4" && (
            <div className="bg-neutral p-5 rounded-lg">
              <img src={icon4.src} alt="" />
              <h3
                style={{ fontSize: "14px" }}
                className="text-primary my-3 font-bold"
              >
                Improved efficiency
              </h3>
              <p className="text-secondary text-sm">
                Clear directions communicated in a consistent format reduces the
                potential for confusion.
              </p>
            </div>
          )}
          {btn !== "Step 4" && (
            <h3
              onClick={() => setBtn("Step 4")}
              style={{ fontSize: "14px" }}
              className="text-primary my-5 bg-neutral p-5 font-bold rounded-lg"
            >
              Improved efficiency
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyCargocheck;
