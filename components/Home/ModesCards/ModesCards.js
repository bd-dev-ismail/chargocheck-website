import truck from "/assets/trucks.png";
import containers from "/assets/containers.png";
import vans from "/assets/vans.png";
import { useState } from "react";
import TruckCard from "./TruckCard";

import VansCard from "./VansCard";
import BackCard from "./BackCard";
import ContainerCard from "./ContainerCard";
import TruckBackCard from "./TruckBackCard";
import VansBackCard from "./VansBackCard";
const ModesCards = () => {
  const [btn, setBtn] = useState("containers");
  return (
    <div className="flex gap-16 mx-auto my-[6rem] flex-col lg:flex-row justify-center items-center  sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      {(btn === "containers" || btn === "vans") && (
        <div onClick={() => setBtn("truck")} className="cursor-pointer">
          <TruckCard truck={truck} btn={btn} />
        </div>
      )}
      {btn === "truck" && (
        <div>
          {" "}
          <TruckBackCard containers={containers} btn={btn} />{" "}
        </div>
      )}
      {(btn === "truck" || btn == "containers") && (
        <div onClick={() => setBtn("vans")} className="cursor-pointer">
          <VansCard vans={vans} btn={btn} />
        </div>
      )}
      {btn === "vans" && (
        <div>
          <VansBackCard containers={containers} btn={btn} />
        </div>
      )}
      {(btn === "vans" || btn === "truck") && (
        <div onClick={() => setBtn("containers")} className="cursor-pointer">
          <ContainerCard vans={vans} btn={btn} />
        </div>
      )}
      {btn === "containers" && (
        <div>
          <BackCard containers={containers} btn={btn} />
        </div>
      )}
    </div>
  );
};

export default ModesCards;
