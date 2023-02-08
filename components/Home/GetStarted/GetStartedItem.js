import { useState } from "react";
import mac from '/assets/iMac 24 inch.png';
const GetStartedItem = () => {
    const [item, setItem] = useState("Step 1");
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                {item === "Step 1" && (
                  <div className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center">
                    <div
                      style={{ fontSize: "1rem" }}
                      className="font-bold uppercase text-primary"
                    >
                      Step 1
                    </div>
                    <h3 className="text-2xl text-primary font-bold my-5">
                      Create CargoCheckTM Tank and Dock Profiles
                    </h3>
                    <p
                      className="text-secondary font-light mb-4 text-start lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      CargoCheck Profile enables logistics professionals and
                      operators to handle specialized chemical products and
                      paperwork safely and efficiently..
                    </p>
                    <p
                      className="text-secondary font-light  lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Customize the standard template for each operation and
                      assign unique IDs and QR codes to ensure the "right
                      product, right tank" is loaded/unloaded. You can quickly
                      merge your database using API and cloud connections
                    </p>
                  </div>
                )}

                <div>
                  {item !== "Step 1" && (
                    <h3
                      onClick={() => setItem("Step 1")}
                      className="text-2xl uppercase text-primary font-normal cursor-pointer my-5"
                    >
                      Step 1
                    </h3>
                  )}
                  {item === "Step 2" && (
                    <div className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center">
                      <div
                        style={{ fontSize: "1rem" }}
                        className="font-bold uppercase text-primary"
                      >
                        Step 2
                      </div>
                      <h3 className="text-2xl text-primary font-bold capitalize my-5">
                        Share details with trusted partners using our
                        connections
                      </h3>
                      <p
                        className="text-secondary font-light mb-4  lg:text-start"
                        style={{ fontSize: "1rem" }}
                      >
                        CargoCheck Profile enables logistics professionals and
                        operators to handle specialized chemical products and
                        paperwork safely and efficiently..
                      </p>
                      <p
                        className="text-secondary font-light  lg:text-start"
                        style={{ fontSize: "1rem" }}
                      >
                        Customize the standard template for each operation and
                        assign unique IDs and QR codes to ensure the "right
                        product, right tank" is loaded/unloaded. You can quickly
                        merge your database using API and cloud connections
                      </p>
                    </div>
                  )}
                  {item !== "Step 2" && (
                    <h3
                      onClick={() => setItem("Step 2")}
                      className="text-2xl uppercase text-primary cursor-pointer font-normal my-5"
                    >
                      Step 2
                    </h3>
                  )}
                  {item === "Step 3" && (
                    <div className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center">
                      <div
                        style={{ fontSize: "1rem" }}
                        className="font-bold uppercase text-primary"
                      >
                        Step 3
                      </div>
                      <h3 className="text-2xl text-primary font-bold capitalize my-5">
                        Digitize and Share Data for Point-to-Point Visibilty
                      </h3>
                      <p
                        className="text-secondary font-light mb-4  lg:text-start"
                        style={{ fontSize: "1rem" }}
                      >
                        CargoCheck Profile enables logistics professionals and
                        operators to handle specialized chemical products and
                        paperwork safely and efficiently..
                      </p>
                      <p
                        className="text-secondary font-light  lg:text-start"
                        style={{ fontSize: "1rem" }}
                      >
                        Customize the standard template for each operation and
                        assign unique IDs and QR codes to ensure the "right
                        product, right tank" is loaded/unloaded. You can quickly
                        merge your database using API and cloud connections
                      </p>
                    </div>
                  )}
                  {item !== "Step 3" && (
                    <h3
                      onClick={() => setItem("Step 3")}
                      className="text-2xl text-primary uppercase cursor-pointer font-normal my-5"
                    >
                      Step 3
                    </h3>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
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
        </div>
      </div>
    );
};

export default GetStartedItem;