import screens from "/assets/Screens.png";
import define from "/assets/icon/define.png";
import scan from "/assets/icon/scan.png";
import { useState } from "react";
import ss1 from "/assets/ss1.png";
import ss2 from "/assets/ss2.png";
import ss3 from "/assets/ss4.png";
import ss4 from "/assets/ss1.png";
const PlatformItem = () => {
  const [item, setItem] = useState("Step 3");
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col h-[35rem] items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              {item === "Step 1" && (
                <div
                  style={{
                    background: "rgba(50, 152, 255, 0.05)",
                    backdropFilter: "blur(5px)",
                  }}
                  className="my-10  rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center"
                >
                  <div>
                    <img
                      src={define.src}
                      alt=""
                      className="w-[4.5rem] h-[4.5rem] text-primary"
                    />
                  </div>
                  <h3 className="text-2xl text-primary font-bold my-5">
                    Navigate screens easily
                  </h3>
                  <p
                    className="text-secondary font-light text-center lg:text-start"
                    style={{ fontSize: "1rem" }}
                  >
                    Designed with the help of truckers and plant operators, the
                    mobile screens flow with intuitive navigation to guide field
                    professionals through the delivery steps. Each facility has
                    the flexibility to include the right amount of detail that
                    field staff need to know to be safe and successful at their
                    site.
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
                    className="text-2xl rounded-lg  p-5 text-primary font-normal cursor-pointer my-5"
                  >
                    Navigate screens easily
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
                    <div>
                      <img
                        src={define.src}
                        alt=""
                        className="w-[4.5rem] h-[4.5rem] text-primary"
                      />
                    </div>
                    <h3 className="text-2xl text-primary font-bold my-5">
                      Know before you go
                    </h3>
                    <p
                      className="text-secondary font-light text-center lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Plan for success with a complete overview of what is
                      special about this shipment with Pre-Shipment
                      instructions. (will need a new screenshot with
                      pre-shipment that doesn’t have Wesmar products and has
                      special instructions. Please use one from Enterprise for
                      potassium hydroxide).
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
                    className="text-2xl rounded-lg  p-5 text-primary cursor-pointer font-normal my-5"
                  >
                    Know before you go
                  </h3>
                )}
                {item === "Step 3" && (
                  <div
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    className="my-10  rounded-lg p-5 flex flex-col justify-center lg:justify-start lg:items-start items-center"
                  >
                    <div>
                      <img
                        src={scan.src}
                        alt=""
                        className="w-[4.5rem] h-[4.5rem] text-primary"
                      />
                    </div>
                    <h3 className="text-2xl text-primary font-bold my-5">
                      Verify
                    </h3>
                    <p
                      className="text-secondary font-light text-center lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      For bulk shipments, each tank in the CargoCheck network is
                      assigned a unique QR code to verify the product matches
                      the digital BOL. Before loading and unloading, Drivers
                      and/or Operators scan to confirm “right product, right
                      tank.”
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
                    className="text-2xl rounded-lg  p-5 text-primary cursor-pointer font-normal my-5"
                  >
                    Verify
                  </h3>
                )}
                {item === "Step 4" && (
                  <div
                    style={{
                      background: "rgba(50, 152, 255, 0.05)",
                      backdropFilter: "blur(5px)",
                    }}
                    className="my-10  rounded-lg p-5  flex flex-col justify-center lg:justify-start lg:items-start items-center"
                  >
                    <div>
                      <img
                        src={define.src}
                        alt=""
                        className="w-[4.5rem] h-[4.5rem] text-primary"
                      />
                    </div>
                    <h3 className="text-2xl text-primary font-bold my-5">
                      Document
                    </h3>
                    <p
                      className="text-secondary font-light text-center lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Capture important events during a shipment with custom
                      checklists, photos, and comments. Upload proof of delivery
                      paperwork on the spot to make them accessible to all
                      parties in a shipment in seconds instead of days.
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
                    className="text-2xl rounded-lg  p-5 text-primary cursor-pointer font-normal my-5"
                  >
                    Document
                  </h3>
                )}
              </div>
            </div>
          </div>
          <div className="lg:flex hidden flex-row-reverse items-center justify-center lg:w-1/2">
            {/* <div className="w-[40%] ">
              <img className="object-cover " src={ss1.src} alt="" />
            </div>
            <div className="w-[40%]  ">
              <img className="object-cover " src={ss2.src} alt="" />
            </div>
            <div className="w-[40%]  ">
              <img className="object-cover " src={ss3.src} alt="" />
            </div>
            <div className="w-[40%]  ">
              <img className="object-cover  " src={ss4.src} alt="" />
            </div> */}
            <div>
              <img src={screens.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformItem;
