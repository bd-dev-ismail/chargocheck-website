import Link from "next/link";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import logo from "/assets/logo.png";
import dropdownLogo from "/assets/icon/customer-support.png";
import truckLogo from "/assets/icon/truck.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItem = (
    <>
      {/* <li>
        <div className="dropdown  dropdown-hover">
          <label
            tabIndex={0}
            className="font-bold cursor-pointer text-base flex items-center tracking-wide text-primary"
          >
            Industries <FaAngleDown className="ml-1" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-60"
          >
            <li>
              <Link
                href="/industries"
                className="font-bold cursor-pointer text-base text-primary tracking-wide"
              >
                Chemical Supplier
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="font-bold cursor-pointer text-base text-primary tracking-wide"
              >
                Transportation
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="font-bold cursor-pointer text-base text-primary tracking-wide"
              >
                Goverment
              </Link>
            </li>
          </ul>
        </div>
      </li> */}
      {/* <li>
        <Link
          href="/industries"
          className="font-bold flex text-base items-center tracking-wide text-primary"
        >
          Industries <FaAngleDown className="ml-3" />
        </Link>
      </li> */}
      <li>
        <div className="dropdown  dropdown-hover">
          <label
            tabIndex={1}
            className="font-bold cursor-pointer text-base flex items-center tracking-wide text-primary"
          >
            Resources <FaAngleDown className="ml-1" />
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-58"
          >
            <li>
              <Link
                href="/blog"
                className="font-bold cursor-pointer text-base text-primary tracking-wide"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="font-bold cursor-pointer text-base text-primary tracking-wide"
              >
                Faq
              </Link>
            </li>
          </ul>
        </div>
      </li>
      {/* <li>
        <Link
          href="/"
          className="font-bold text-base flex items-center tracking-wide text-primary"
        >
          Resources <FaAngleDown className="ml-3" />
        </Link>
      </li> */}
      <li>
        <div className="dropdown  dropdown-hover">
          <label
            tabIndex={1}
            className="font-bold cursor-pointer text-base flex items-center tracking-wide text-primary"
          >
            About <FaAngleDown className="ml-1" />
          </label>
          <ul
            tabIndex={1}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-58"
          >
            <li>
              <Link
                href="/about"
                className="font-bold cursor-pointer text-base text-primary tracking-wide"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="font-bold cursor-pointer text-base text-primary tracking-wide"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </li>
      {/* <li>
        <Link
          href="/pricing"
          className="font-bold text-base flex items-center tracking-wide text-primary"
        >
          Pricing
        </Link>
      </li> */}
    </>
  );
  const menuItem2 = (
    <>
      <li>
        <Link
          href="/"
          className="font-bold text-base flex items-center tracking-wide text-primary"
        >
          <RiUserLine className="mr-3" /> Log In
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className=" text-base btn btn-primary capitalize font-bold rounded-full text-white"
        >
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="px-4 py-6 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Chargocheck"
              title="Chargocheck"
              className="inline-flex items-center mr-8"
            >
              <img src={logo.src} alt="" />
              {/* <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                Chargocheck
              </span> */}
            </Link>
            <ul className="flex items-center hidden gap-8 lg:flex">
              {menuItem}
            </ul>
          </div>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {menuItem2}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-6 text-gray-900" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-50">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <img src={logo.src} alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-6 text-gray-900" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {menuItem}
                      {menuItem2}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
