// import { useRouter } from "next/router";
// import { FaAngleRight } from "react-icons/fa";
import banner from '../../../assets/contactBanner.png';

const ContactBanner = () => {
  // const router = useRouter();
return (
  <div>
    {/* <div>
      <div className="h-[26rem]  relative bg-primary w-[100vw] flex justify-center items-center">
        <div className="text-white text-center">
          <h3 style={{ fontSize: "40px" }} className="font-bold">
            We’d love to hear from you
          </h3>
          <p className="font-light" style={{ fontSize: "20px" }}>
            Whether you’re curious about services, industries— <br /> we’re
            ready to answer any and all questions.
          </p>
        </div>
      </div>
      <div className="text-white font-bold text-base flex items-center gap-4 absolute top-[15%] left-[5%]">
        <a className="cursor-pointer" onClick={() => router.push("/")}>
          Home
        </a>
        <FaAngleRight />
        <a
          className="cursor-pointer"
          onClick={() => router.push("/contact-us")}
        >
          Contact
        </a>
      </div>
    </div> */}
    <div
    id='contact-banner'
      style={{
        background: `url(${banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        
      }}
      className="h-[40rem]"
    ></div>
  </div>
);
};

export default ContactBanner;
