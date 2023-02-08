import Link from "next/link";

const Pricing = () => {
    return (
      <div className="my-[5rem] bg-white">
        <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h3
            style={{ fontSize: "32px" }}
            className="text-primary  font-bold mb-4"
          >
            Our Pricing
          </h3>
          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Debitis, officiis. Saepe, optio rerum? Delectus saepe quaerat ad
            magnam laborum cupiditate!
          </p>
        </div>
        <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-stretch -mx-4">
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col w-full lg:w-[22rem] p-6 space-y-6 rounded shadow sm:p-8 bg-white">
                  <div className="space-y-2">
                    <h4 className="text-3xl text-primary font-bold mb-3">
                      Free
                    </h4>
                    <span className="text-sm text-secondary">
                      (For Everyone)
                    </span>
                    <div className="divider"></div>
                  </div>
                  <ul className="flex-1 mb-6 dark:text-gray-400">
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        $0
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 2
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 3
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 4
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 5
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/"
                    className="font-normal w-full text-base btn btn-primary rounded-full text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div
                  style={{ backgroundColor: "rgba(50, 152, 255, 0.15)" }}
                  className="flex flex-col w-full lg:w-[22rem] p-6 space-y-6 rounded shadow sm:p-8 "
                >
                  <div className="space-y-2">
                    <h4 className="text-3xl text-primary font-bold mb-3">
                      Business
                    </h4>
                    <span className="text-sm text-secondary">
                      (for lean teams looking to save time)
                    </span>
                    <div className="divider"></div>
                  </div>
                  <ul className="flex-1 mb-6 dark:text-gray-400">
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        $25/month
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 2
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 3
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 4
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 5
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/"
                    className="font-normal w-full text-base btn btn-primary rounded-full text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col w-full lg:w-[22rem] p-6 space-y-6 rounded shadow sm:p-8 bg-white">
                  <div className="space-y-2">
                    <h4 className="text-3xl text-primary font-bold mb-3">
                      Custom
                    </h4>
                    <span className="text-sm text-secondary">
                      (for scaling teams and enterprises)
                    </span>
                    <div className="divider"></div>
                  </div>
                  <ul className="flex-1 mb-6 dark:text-gray-400">
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Contact Sels
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 2
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 3
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 4
                      </span>
                    </li>
                    <li className="flex mb-6 space-x-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-[#CBCBC9]"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-2xl font-bold text-primary">
                        Perk 5
                      </span>
                    </li>
                  </ul>
                  <Link
                    href="/"
                    className="font-normal w-full text-base btn btn-primary rounded-full text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Pricing;