
import about from '/assets/aboutPhone.png';
import bgabout from '/assets/aboutbg.png'
const AboutChargocheck = () => {
    return (
      <div className="lg:hidden">
        <div className="px-4 lg:px-0 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:py-[8rem]">
          <div className="flex flex-col-reverse items-center justify-around lg:flex-row">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <h2
                  style={{ fontSize: "2rem" }}
                  className="font-bold text-primary my-[2rem]"
                >
                  We are about helping our valued customers succeed
                </h2>
                <h4
                  style={{ fontSize: "20px", fontWeight: "300" }}
                  className=" text-secondary"
                >
                  The CargoCheck team’s of experienced chemical industry and
                  technology professionals are passionate about helping people
                  go home safely after a productive day. We help chemical
                  suppliers, manufacturers, municipal government, and logistics
                  providers solve real problems with easy-to-implement,
                  cost-effective cloud tools.
                </h4>
                <p
                  style={{ fontSize: "20px", fontWeight: "300" }}
                  className=" text-secondary my-10"
                >
                  One particularly unproductive day in 2020, an unfortunate
                  essential worker drove 350 miles from the Port of Vancouver,
                  WA to Western Idaho to find he did not have the right
                  equipment to unload. Costly incidents like this prompted us to
                  ask how our developer friends could help our logistics friends
                  avoid wasted resources and time. Since 2020, over 100 people
                  have contributed ideas for what would make their jobs easier
                  and how cloud solutions can foster collaboration across
                  departments, organizations, languages, and time zones.
                </p>
                <p
                  style={{ fontSize: "20px", fontWeight: "300" }}
                  className=" text-secondary"
                >
                  CargoCheckᵀᴹ is the culmination of the deep expertise and
                  creativity of each of the contributors, and we're excited to
                  road test version 2.0 in early 2023.
                </p>
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