
import about from '/assets/about.png';
import bgabout from '/assets/aboutbg.png'
const AboutChargocheck = () => {
    return (
      <div>
        <div className="px-4 lg:px-0 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-[8rem]">
          <div className="flex flex-col items-center justify-around lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2
                  style={{ fontSize: "2rem" }}
                  className="font-bold text-primary mb-[2rem]"
                >
                  About CargoCheck
                </h2>
                <h4
                  style={{ fontSize: "20px", fontWeight: "300" }}
                  className=" text-secondary"
                >
                  Lorem ipsum dolor sit amet consectetur. Volutpat amet donec
                  sed faucibus commodo placerat leo nullam maecenas. Ullamcorper
                  integer donec neque diam massa id at bibendum arcu. Viverra
                  viverra varius aliquet leo accumsan fames phasellus in ornare.
                  Ac eu purus sollicitudin urna lobortis sem lectus a. Urna sit
                  iaculis augue pulvinar quam eu. Mauris blandit ante non dolor
                  dictum pellentesque egestas at pellentesque. Ullamcorper
                  integer donec neque diam massa id at bibendum arcu.
                </h4>
              </div>
            </div>
            <div className="relative w-full lg:w-1/2 lg:flex items-center justify-center">
              <div>
                <img
                  src={bgabout.src}
                  alt=""
                  className="object-cover lg:w-[26rem] lg:h-[23rem] w-full h-56 sm:h-96 mb-5  lg:ml-32 relative"
                />
              </div>
              <div>
                <img
                  className="object-cover absolute top-[5%] right-2 lg:right-5 lg:w-[25rem] lg:h-[23rem] w-full h-56 rounded shadow-lg sm:h-96"
                  src={about.src}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutChargocheck;