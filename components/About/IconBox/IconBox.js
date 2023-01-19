import icon1 from '/assets/icon/messages.png';
import icon2 from '/assets/icon/clock.png';
import icon3 from '/assets/icon/device-gamepad.png';
import icon4 from '/assets/icon/currency-dollar.png';
const IconBox = () => {
    const itemList = [
      {
        name: "Communicate",
        desc: "CargoCheckTM offers specialized assistance to chemical suppliers to ensure safe and compliant transportation by verifying that the right product is loaded/unloaded into the right container..",
        icon: icon1,
      },
      {
        name: "Flexiable Working Hour",
        desc: "CargoCheckTM provides performance analysis and real-time visibility to manufacturers and distributors to improve their operations' efficiency, accuracy, and competitiveness.",
        icon: icon2,
      },
      {
        name: "Fun Zone",
        desc: "Governments can optimize routing and scheduling, reduce the risk of delays or errors, and improve communication with partners by providing real-time visibility.",
        icon: icon3,
      },
      {
        name: "Transportation",
        desc: "CargoCheckTM helps transporters identify cost savings opportunities and analyze KPIs such as on-time delivery rate, order accuracy, and customer satisfaction.",
        icon: icon4,
      },
    ];
    return (
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
            <h3 className="text-2xl  text-primary font-bold my-5">
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
    );
};

export default IconBox;