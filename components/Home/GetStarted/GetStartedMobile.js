import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
const GetStartedMobile = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      pagination={true}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {" "}
      <SwiperSlide>
        {" "}
        <div className="my-10 bg-neutral h-[34rem] rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center">
          {/* <div
                      style={{ fontSize: "1rem" }}
                      className="font-bold uppercase text-primary"
                    >
                      Step 1
                    </div> */}
          <h3 className="text-2xl text-primary font-bold my-5">Join</h3>
          <p
            className="text-secondary font-light mb-4 text-start lg:text-start"
            style={{ fontSize: "1rem" }}
          >
            Access the vetted, member’s only network of trusted chemical
            suppliers, manufacturers, municipalities, and transportation pros
            who put safety first for every shipment. Every member organization
            is first qualified as a legitimate chemical Shipper, Carrier, or
            Receiver before they can join the network. Contact us to find out
            how this important step helps keep your information safe.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="my-10 bg-neutral  h-[34rem] rounded-lg p-5  flex flex-col justify-center lg:justify-start lg:items-start items-center">
          {/* <div
                        style={{ fontSize: "1rem" }}
                        className="font-bold uppercase text-primary"
                      >
                        Step 2
                      </div> */}
          <h3 className="text-2xl text-primary font-bold capitalize my-5">
            Define
          </h3>
          <p
            className="text-secondary font-light mb-4  lg:text-start"
            style={{ fontSize: "1rem" }}
          >
            Shippers, Carriers, and Receivers of chemicals each define their
            locations and contacts.
          </p>
          <p
            className="text-secondary font-light  lg:text-start"
            style={{ fontSize: "1rem" }}
          >
            Shippers and Receivers define products they ship/receive and what
            makes a perfect pick up or delivery for their tanks, silos, and
            docks with templates designed by safe-handling experts. For an extra
            layer of safety, bulk tanks and silos are assigned unique IDs and QR
            codes to ensure the “right product/right tank.”
          </p>
          <p
            className="text-secondary font-light  lg:text-start"
            style={{ fontSize: "1rem" }}
          >
            Location, contact, and product data is all populated from your
            existing ERP or TMS via manual data entry, manual spreadsheet
            uploads, or automated cloud API connections. Contact us to discuss
            the best method for your organization.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="my-10 bg-neutral h-[34rem] rounded-lg p-5  flex flex-col justify-center lg:justify-start lg:items-start items-center">
          {/* <div
                        style={{ fontSize: "1rem" }}
                        className="font-bold uppercase text-primary"
                      >
                        Step 3
                      </div> */}
          <h3 className="text-2xl text-primary font-bold capitalize my-5">
            Share
          </h3>
          <p
            className="text-secondary font-light mb-4  lg:text-start"
            style={{ fontSize: "1rem" }}
          >
            CargoCheck Connections functionality allow you to control what you
            share with other members. You can choose to be listed in a member
            directory or not, as well as which products, tanks, docks, and
            contacts are visible once connected.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="my-10 h-[34rem] bg-neutral rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center">
          {/* <div
                        style={{ fontSize: "1rem" }}
                        className="font-bold uppercase text-primary"
                      >
                        Step 3
                      </div> */}
          <h3 className="text-2xl text-primary font-bold capitalize my-5">
            Ship
          </h3>
          <p
            className="text-secondary font-light mb-4  lg:text-start"
            style={{ fontSize: "1rem" }}
          >
            Link individual shipments with bill of lading (BOL) data from and
            ERP or TMS via manual spreadsheet uploads or automated,
            cloud-connected APIs. These digitized shipping documents are visible
            to office staff via a web app and to field staff via iOS or Android
            devices.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="my-10 h-[34rem] bg-neutral rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center">
          {/* <div
                        style={{ fontSize: "1rem" }}
                        className="font-bold uppercase text-primary"
                      >
                        Step 3
                      </div> */}
          <h3 className="text-2xl text-primary font-bold capitalize my-5">
            Analyze
          </h3>
          <p
            className="text-secondary font-light mb-4  lg:text-start"
            style={{ fontSize: "1rem" }}
          >
            Administrators can see real-time updates of current shipments and
            retrieve data to analyze past shipments. Documentation for detention
            and other unexpected fees are visible to all parties in a shipment,
            and trends can be analyzed to find opportunities for improvement.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default GetStartedMobile;
