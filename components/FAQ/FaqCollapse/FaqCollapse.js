import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const FaqCollapse = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const url = process.env.NEXT_PUBLIC_URL;
  useEffect(() => {
    setLoading(true);
    fetch(`${url}/api/faqs`)
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-[8rem] sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <section className=" bg-white">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loading && <Loader />}
            {faqs?.map(
              (item, idx) => (
                console.log(item), (<Faq item={item} key={idx} idx={idx} />)
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqCollapse;

function Faq({ item, idx }) {
  const [open, SetIsOpen] = useState(true);
  return (
    <>
      <div>
        <details
          style={{
            boxShadow: "2px 2px 10px rgba(0, 51, 102, 0.15)",
          }}
          className={`${
            !open ? "w-full border  max-h-[15rem] rounded-lg" : undefined
          }`}
        >
          <summary
            onClick={() => SetIsOpen(!open)}
            className="px-4 py-4  cursor-pointer focus:outline-none text-primary font-bold flex items-center justify-between"
            style={{ fontSize: "24px" }}
          >
            {item?.attributes?.question}
            {open ? <FaPlus /> : <FaMinus />}
          </summary>

          <p
            style={{ paddingTop: "20px" }}
            className={`${
              !open
                ? "px-4 py-6  pt-0 ml-4  -mt-4 text-secondary text-lg font-light"
                : undefined
            }`}
          >
            {item?.attributes?.answer}
          </p>
        </details>
      </div>
    </>
  );
}
