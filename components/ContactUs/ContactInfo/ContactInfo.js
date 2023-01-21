import icon1 from '/assets/icon/messages.png';
import icon2 from '/assets/icon/device-mobile-message.png';
import icon3 from '/assets/icon/map-2.png';
const ContactInfo = () => {
    const itemList = [
      {
        name: "Email",
        desc: " info@cargocheck.com",
        icon: icon1,
        
      },
      {
        name: "Mobile",
        desc: "+1 (425) 941-8597",
        icon: icon2,
        
      },
      {
        name: "Locate Us",
        desc: "USA",
        icon: icon3,
        
      },
    ];
    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-[6rem] gap-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
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
                style={{ fontSize: "20px" }}
              >
                {item?.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default ContactInfo;