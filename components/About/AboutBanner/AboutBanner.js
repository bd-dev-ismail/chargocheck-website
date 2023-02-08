import { useRouter } from "next/router";
import { FaAngleRight } from "react-icons/fa";
import banner from "../../../assets/aboutBanner.png";
const AboutBanner = () => {
  const router = useRouter();
  return (
    <div>
      <div className="lg:hidden">
        <div className="h-[26rem] relative bg-primary w-[100vw] flex justify-center items-center">
          <h3 style={{ fontSize: "40px" }} className="text-white font-bold ">
            Who We Are
          </h3>
        </div>
        <div className="text-white font-bold text-base flex items-center gap-4 absolute top-[15%] left-[5%]">
          {/* <Link>Home</Link>
          
            <FaAngleRight />
         
            {" "}
            <Link>Industries</Link> */}
          <a className="cursor-pointer" onClick={() => router.push("/")}>
            Home
          </a>
          <FaAngleRight />
          <a className="cursor-pointer" onClick={() => router.push("/about")}>
            Company
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <div
          style={{
            background: ` linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${banner.src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-[40rem] flex justify-center items-center"
        >
          <div>
            <h3 style={{ fontSize: "40px" }} className="text-white font-bold ">
              Who We Are
            </h3>
          </div>
        </div>
        <div className="sm:max-w-xl md:max-w-full mt-20 lg:max-w-screen-xl mx-auto ">
          <h3 className="text-primary text-3xl font-bold">
            We are about helping our valued customers succeed
          </h3>
          <p className="text-xl text-secondary mt-8 ">
            The CargoCheck team’s of experienced chemical industry and
            technology professionals are passionate about helping people go home
            safely after a productive day. We help chemical suppliers,
            manufacturers, municipal government, and logistics providers solve
            real problems with easy-to-implement, cost-effective cloud tools.{" "}
          </p>
          <p className="my-5 text-xl text-secondary">
            {" "}
            One particularly unproductive day in 2020, an unfortunate essential
            worker drove 350 miles from the Port of Vancouver, WA to Western
            Idaho to find he did not have the right equipment to unload. Costly
            incidents like this prompted us to ask how our developer friends
            could help our logistics friends avoid wasted resources and time.
            Since 2020, over 100 people have contributed ideas for what would
            make their jobs easier and how cloud solutions can foster
            collaboration across departments, organizations, languages, and time
            zones.
          </p>
          <p className="text-xl text-secondary">
            {" "}
            CargoCheckᵀᴹ is the culmination of the deep expertise and creativity
            of each of the contributors, and we're excited to road test version
            2.0 in early 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
