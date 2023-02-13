import work from "../../../assets/workWithuS.jpg";

const WorkWithUs = () => {
  return (
    <div className="mt-[5rem] mb-[3rem] bg-white">
      <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
        <div>
          <h3
            style={{ fontSize: "32px" }}
            className="text-primary  font-bold mb-4"
          >
            Work With Us
          </h3>
          <p className="text-xl font-light px-4">
            We’re excited to connect with you to help our mutual customers with
            fully integrated solutions that build on the <br /> great products
            and services you already provide. Contact us (hyperlink to Contact
            Us page) to get started with <br /> APIs and to explore partnering
            opportunities.
          </p>
        </div>
        <div className="flex justify-center items-center mt-16 px-4 lg:px-0 ">
          <img src={work.src} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
