
import icon1 from '/assets/icon/know.png';
import icon2 from '/assets/icon/point.png';
import icon3 from '/assets/icon/scan.png';
import icon4 from '/assets/icon/improved.png';
const WhyCargocheck = () => {
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
  ];
  return (
    <div className="mt-[5rem] mb-[3rem]">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <h3 className="text-primary text-3xl font-bold mb-4">Why CargoCheck</h3>
        <p className="text-xl font-light">
          CargoCheck logistics software connects chemical suppliers,
          manufacturers, and transporters via cloud <br /> collaboration to
          safely, efficiently handle products & paperwork. While other solutions
          can also answer “where” a <br /> truck is, CargoCheck helps everyone
          responsible for on-spec, on-time delivery know the “what” and the
          “how” for each shipment.
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

export default WhyCargocheck;
