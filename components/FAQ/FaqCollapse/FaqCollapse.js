import { useEffect, useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
const FaqCollapse = () => {
  const [open, SetIsOpen] = useState(true);
  const [faqs, setFaqs] = useState([]);
  const url = process.env.NEXT_PUBLIC_URL;
  useEffect(() => {
    fetch(`${url}/api/faqs`)
      .then((res) => res.json())
      .then((data) => setFaqs(data.data));
  }, []);

  return (
    <div className="my-[8rem] sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <section className=" bg-white">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-4 gap-8">
            {faqs?.map(
              (item, idx) => (
                console.log(item),
                (
                  <details key={idx} className="w-full border rounded-lg">
                    <summary
                      
                      className="px-4 py-4  cursor-pointer focus:outline-none text-primary font-bold flex items-center justify-between"
                      style={{ fontSize: '24px' }}
                    >
                      {item?.attributes?.question}
                      <FaPlus /> 
                    </summary>
                    <p style={{paddingTop: "20px"}} className="px-4 py-6 pt-0 ml-4 -mt-4 text-secondary text-lg font-light">
                      {item?.attributes?.answer}
                    </p>
                  </details>
                )
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqCollapse;
