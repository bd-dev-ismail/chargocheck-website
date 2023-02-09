import { useState } from "react";
import GetStartedMobile from "./GetStartedMobile";
import mac from "/assets/macIphon.png";

const GetStartedItem = () => {
  const [item, setItem] = useState("Step 1");

  return (
    <div>
      <div className="px-4 mt-[5rem] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="lg:flex hidden flex-col-reverse items-center  justify-between  lg:h-[40rem] gap-8 w-full mb-10 lg:flex-row">
          <div className="hidden lg:block mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              {item === "Step 1" && (
                <div
                  style={{
                    background: "rgba(50, 152, 255, 0.05)",
                    backdropFilter: "blur(5px)",
                  }}
                  className="my-10  rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center"
                >
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
                    suppliers, manufacturers, municipalities, and transportation
                    pros who put safety first for every shipment. Every member
                    organization is first qualified as a legitimate chemical
                    Shipper, Carrier, or Receiver before they can join the
                    network. Contact us to find out how this important step
                    helps keep your information safe.
                  </p>
                </div>
              )}

              <div>
                {item !== "Step 1" && (
                  <h3
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    onClick={() => setItem("Step 1")}
                    className="text-2xl rounded-lg  p-5 capitalize text-primary font-normal cursor-pointer my-5"
                  >
                    Join
                  </h3>
                )}
                {item === "Step 2" && (
                  <div
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    className="my-10  rounded-lg p-5  flex flex-col justify-center lg:justify-start lg:items-start items-center"
                  >
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
                      Shippers, Carriers, and Receivers of chemicals each define
                      their locations and contacts.
                    </p>
                    <p
                      className="text-secondary font-light  lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Shippers and Receivers define products they ship/receive
                      and what makes a perfect pick up or delivery for their
                      tanks, silos, and docks with templates designed by
                      safe-handling experts. For an extra layer of safety, bulk
                      tanks and silos are assigned unique IDs and QR codes to
                      ensure the “right product/right tank.”
                    </p>
                    <p
                      className="text-secondary font-light  lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Location, contact, and product data is all populated from
                      your existing ERP or TMS via manual data entry, manual
                      spreadsheet uploads, or automated cloud API connections.
                      Contact us to discuss the best method for your
                      organization.
                    </p>
                  </div>
                )}
                {item !== "Step 2" && (
                  <h3
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    onClick={() => setItem("Step 2")}
                    className="text-2xl rounded-lg  p-5 capitalize text-primary cursor-pointer font-normal my-5"
                  >
                    Define
                  </h3>
                )}
                {item === "Step 3" && (
                  <div
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    className="my-10  rounded-lg p-5  flex flex-col justify-center lg:justify-start lg:items-start items-center"
                  >
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
                      CargoCheck Connections functionality allow you to control
                      what you share with other members. You can choose to be
                      listed in a member directory or not, as well as which
                      products, tanks, docks, and contacts are visible once
                      connected.
                    </p>
                  </div>
                )}
                {item !== "Step 3" && (
                  <h3
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    onClick={() => setItem("Step 3")}
                    className="text-2xl rounded-lg  p-5 text-primary capitalize cursor-pointer font-normal my-5"
                  >
                    Share
                  </h3>
                )}
                {item === "Step 4" && (
                  <div
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    className="my-10  rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center"
                  >
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
                      Link individual shipments with bill of lading (BOL) data
                      from and ERP or TMS via manual spreadsheet uploads or
                      automated, cloud-connected APIs. These digitized shipping
                      documents are visible to office staff via a web app and to
                      field staff via iOS or Android devices.
                    </p>
                  </div>
                )}
                {item !== "Step 4" && (
                  <h3
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    onClick={() => setItem("Step 4")}
                    className="text-2xl  rounded-lg  p-5 text-primary capitalize cursor-pointer font-normal my-5"
                  >
                    Ship
                  </h3>
                )}
                {item === "Step 5" && (
                  <div
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    className="my-10  rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center"
                  >
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
                      Administrators can see real-time updates of current
                      shipments and retrieve data to analyze past shipments.
                      Documentation for detention and other unexpected fees are
                      visible to all parties in a shipment, and trends can be
                      analyzed to find opportunities for improvement.
                    </p>
                  </div>
                )}
                {item !== "Step 5" && (
                  <h3
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    onClick={() => setItem("Step 5")}
                    className="text-2xl rounded-lg p-5  text-primary capitalize cursor-pointer font-normal my-5"
                  >
                    Analyze
                  </h3>
                )}
              </div>
            </div>
          </div>

          <div className="flex  items-center  justify-center lg:max-w-[50%]">
            <div>
              <img src={mac.src} alt="" />
            </div>
            {/* <div className="w-2/5">
                <img
                  className="object-cover"
                  src="https://kitwind.io/assets/kometa/one-girl-phone.png"
                  alt=""
                />
              </div>
              <div className="w-5/12 -ml-16 lg:-ml-32">
                <img
                  className="object-cover"
                  src="https://kitwind.io/assets/kometa/two-girls-phone.png"
                  alt=""
                />
              </div> */}
          </div>
        </div>
        <div className="lg:hidden">
          <div>
            <img src={mac.src} alt="" />
          </div>

          <div className="lg:hidden">
            <GetStartedMobile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedItem;
