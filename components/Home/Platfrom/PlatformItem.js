import screens from "/assets/Screens.png";
import define from '/assets/icon/define.png';
import { useState } from "react";
const PlatformItem = () => {
  const [item, setItem] = useState("Define");
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              {item === "Define" && (
                <div className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center">
                  <div>
                    <img
                      src={define.src}
                      alt=""
                      className="w-[4.5rem] h-[4.5rem] text-primary"
                    />
                  </div>
                  <h3 className="text-2xl text-primary font-bold my-5">
                    Define
                  </h3>
                  <p
                    className="text-secondary font-light text-center lg:text-start"
                    style={{ fontSize: "1rem" }}
                  >
                    Define what makes a perfect pick up or delivery for your
                    facility’s tanks, silos, and docks with templates designed
                    by safe-handling experts.
                  </p>
                </div>
              )}

              <div>
                {item !== "Define" && (
                  <h3
                    onClick={() => setItem("Define")}
                    className="text-2xl text-primary font-normal cursor-pointer my-5"
                  >
                    Define
                  </h3>
                )}

                {item === "Share" && (
                  <div className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center">
                    <div>
                      <img
                        src={define.src}
                        alt=""
                        className="w-[4.5rem] h-[4.5rem] text-primary"
                      />
                    </div>
                    <h3 className="text-2xl text-primary font-bold my-5">
                      Share
                    </h3>
                    <p
                      className="text-secondary font-light text-center lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Define what makes a perfect pick up or delivery for your
                      facility’s tanks, silos, and docks with templates designed
                      by safe-handling experts.
                    </p>
                  </div>
                )}
                {item !== "Share" && (
                  <h3
                    onClick={() => setItem("Share")}
                    className="text-2xl text-primary cursor-pointer font-normal my-5"
                  >
                    Share
                  </h3>
                )}
                {item === "Confrim" && (
                  <div className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center">
                    <div>
                      <img
                        src={define.src}
                        alt=""
                        className="w-[4.5rem] h-[4.5rem] text-primary"
                      />
                    </div>
                    <h3 className="text-2xl text-primary font-bold my-5">
                      Confrim
                    </h3>
                    <p
                      className="text-secondary font-light text-center lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Define what makes a perfect pick up or delivery for your
                      facility’s tanks, silos, and docks with templates designed
                      by safe-handling experts.
                    </p>
                  </div>
                )}
                {item !== "Confrim" && (
                  <h3
                    onClick={() => setItem("Confrim")}
                    className="text-2xl text-primary cursor-pointer font-normal my-5"
                  >
                    Confrim
                  </h3>
                )}
                {item === "Analyze" && (
                  <div className="my-10  flex flex-col justify-center lg:justify-start lg:items-start items-center">
                    <div>
                      <img
                        src={define.src}
                        alt=""
                        className="w-[4.5rem] h-[4.5rem] text-primary"
                      />
                    </div>
                    <h3 className="text-2xl text-primary font-bold my-5">
                      Analyze
                    </h3>
                    <p
                      className="text-secondary font-light text-center lg:text-start"
                      style={{ fontSize: "1rem" }}
                    >
                      Define what makes a perfect pick up or delivery for your
                      facility’s tanks, silos, and docks with templates designed
                      by safe-handling experts.
                    </p>
                  </div>
                )}
                {item !== "Analyze" && (
                  <h3
                    onClick={() => setItem("Analyze")}
                    className="text-2xl text-primary cursor-pointer font-normal my-5"
                  >
                    Analyze
                  </h3>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2">
            <div>
              <img src={screens.src} alt="" />
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

export default PlatformItem;
