import { useState } from "react";
import SingleSection from "./SingleSection";

const IndustriesSections = () => {
  const [btn, setBtn] = useState("Goverment");
  return (
    <div className="mt-[3rem] mb-[5rem]">
      <div className="flex justify-center items-center gap-8">
        <h3
          onClick={() => setBtn("Chemical Supplier")}
          className={`text-2xl font-bold py-4 px-6 cursor-pointer ${
            btn === "Chemical Supplier"
              ? "text-primary border-b-2 border-primary"
              : "text-secondary"
          }`}
        >
          Chemical
        </h3>
        <h3
          onClick={() => setBtn("Manufacturing")}
          className={`text-2xl font-bold py-4 px-6 cursor-pointer ${
            btn === "Manufacturing"
              ? "text-primary border-b-2 border-primary"
              : "text-secondary"
          }`}
        >
          Manufacturing
        </h3>

        <h3
          onClick={() => setBtn("Goverment")}
          className={`text-2xl font-bold py-4 px-6 cursor-pointer ${
            btn === "Goverment"
              ? "text-primary border-b-2 border-primary"
              : "text-secondary"
          }`}
        >
          Goverment
        </h3>

        <h3
          onClick={() => setBtn("Transportation - Bulk & Packaged")}
          className={`text-2xl font-bold py-4 px-6 cursor-pointer ${
            btn === "Transportation - Bulk & Packaged"
              ? "text-primary border-b-2 border-primary"
              : "text-secondary"
          }`}
        >
          Transportation
        </h3>
      </div>
      <div>
        <SingleSection btn={btn} />
      </div>
      
    </div>
  );
};

export default IndustriesSections;
