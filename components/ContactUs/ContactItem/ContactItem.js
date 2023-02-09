import icon1 from "/assets/icon/messages.png";
import icon2 from "/assets/icon/headset.png";
import Link from "next/link";
const ContactItem = () => {
  const itemList = [
    {
      name: "Sales",
      desc: "CargoCheckTM offers specialized assistance to chemical suppliers to ensure safe and compliant transportation by verifying that the right product is loaded/unloaded into the right container.",
      icon: icon1,
      btnName: "Schedule a Call",
      btnLink: "mailto:kathy@cargocheck.com",
    },
    {
      name: "Support",
      desc: "CargoCheckTM provides performance analysis and real-time visibility to manufacturers and distributors to improve their operations' efficiency, accuracy, and competitiveness.",
      icon: icon2,
      btnName: "Get Help",
      btnLink: "mailto:support@cargocheck.com",
    },
    {
      name: "Media",
      desc: "Curious about CargoCheck and our mission to save resources and empower safe teamwork? Let’s talk.",
      icon: icon1,
      btnName: "Let's Chat",
    },
    {
      name: "Patnership",
      desc: "We’re always happy to explore ways to work smarter, not harder. Let’s connect on how we can help our mutual customers, suppliers, or community.",
      icon: icon2,
      btnName: "Connect",
      btnLink: "mailto:kathy@cargocheck.com",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-[6rem] gap-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        {itemList.map((item, idx) => (
          <div
            style={{
              background: "rgba(50, 152, 255, 0.05)",
              backdropFilter: "blur(5px)",
            }}
            key={idx}
            className="my-10 p-5  rounded-lg  flex flex-col justify-center lg:justify-start lg:items-start items-center"
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
            <a
              href={item?.btnLink}
              className="font-normal mt-[24px] text-base btn btn-primary rounded-full text-white"
            >
              {item?.btnName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactItem;
