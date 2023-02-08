import {AiOutlineLinkedin, AiOutlinePhone} from 'react-icons/ai';
import {BiEnvelope} from 'react-icons/bi';
import logo from '/assets/footerlogo.png';
const Footer = () => {
    const industriesItem = [
        {name: "Chemical Suppiler"},
        {name: "Manufaturing"},
        {name: "Goverment"},
        {name: "Transportation"},
    ]
    return (
      <div className="w-full bg-primary">
        <div className="px-4 pb-10 pt-16 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
          <div className="grid gap-16 text-center md:text-start row-gap-10 mb-8 lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                {/* <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                  CargoCheckTM
                </span> */}
                <img src={logo.src} alt="" />
              </a>
              <div className="mt-4 lg:max-w-sm ">
                <p className="text-sm text-white">
                  Fastrack Safer Chemical <br /> Logistic
                </p>
              </div>
              <div className="flex gap-4 mt-10 justify-center md:justify-start">
                <a href="/">
                  <AiOutlineLinkedin className="text-white text-xl" />
                </a>
                <a href="/">
                  <BiEnvelope className="text-white text-xl" />
                </a>
                <a href="/" className="flex items-center text-white">
                  <AiOutlinePhone className="text-white text-xl rotate-90" /> +1
                  (425) 941-8597
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2  gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide  text-white">
                  Category
                </p>
                <ul className="mt-2 space-y-2 ">
                  {industriesItem.map((item, idx) => (
                    <li key={idx} >
                      <a href="/" className="text-white text-sm font-light">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white">
                  Resources
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="text-white text-sm font-light">
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white text-sm font-light">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white">About</p>
                {/* <ul className="mt-2 space-y-2">
                 About Items 
                </ul> */}
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white">Pricing</p>
                {/* <ul className="mt-2 space-y-2">
                 *Pricing Items
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;