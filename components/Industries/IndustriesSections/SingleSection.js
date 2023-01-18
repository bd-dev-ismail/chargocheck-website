import gov from '/assets/goverment.png';
import chemical from '/assets/chemical.png';
import manufacturing from '/assets/manufacturing.png';
import transport from '/assets/transportation.png';
const SingleSection = ({btn}) => {
    return (
      <div>
        <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-[8rem]">
          <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2
                  style={{ fontSize: "2rem" }}
                  className="font-bold text-primary mb-[2rem]"
                >
                  {btn}
                </h2>
                <p
                  style={{ fontSize: "24px", fontWeight: "300" }}
                  className=" text-secondary"
                >
                  {btn === "Goverment" &&
                    "Governments can optimize routing and scheduling, reduce the risk of delays or errors, and improve communication with partners by providing real-time visibility."}
                  {btn === "Chemical Supplier" &&
                    "CargoCheckTM offers specialized assistance to chemical suppliers to ensure safe and compliant transportation by verifying that the right product is loaded/unloaded into the right container."}
                  {btn === "Manufacturing" &&
                    "CargoCheckTM provides performance analysis and real-time visibility to manufacturers and distributors to improve their operations' efficiency, accuracy, and competitiveness."}
                  {btn === "Transportation - Bulk & Packaged" &&
                    "CargoCheckTM helps transporters identify cost savings opportunities and analyze KPIs such as on-time delivery rate, order accuracy, and customer satisfaction."}
                </p>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              {btn === "Goverment" && (
                <img
                  className="object-cover lg:w-[25rem] lg:h-[23rem] w-full h-56 rounded shadow-lg sm:h-96"
                  src={gov.src}
                  alt=""
                />
              )}
              {btn === "Chemical Supplier" && (
                <img
                  className="object-cover lg:w-[25rem] lg:h-[23rem] w-full h-56 rounded shadow-lg sm:h-96"
                  src={chemical.src}
                  alt=""
                />
              )}
              {btn === "Manufacturing" && (
                <img
                  className="object-cover lg:w-[25rem] lg:h-[23rem] w-full h-56 rounded shadow-lg sm:h-96"
                  src={manufacturing.src}
                  alt=""
                />
              )}
              {btn === "Transportation - Bulk & Packaged" && (
                <img
                  className="object-cover lg:w-[25rem] lg:h-[23rem] w-full h-56 rounded shadow-lg sm:h-96"
                  src={transport.src}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleSection;