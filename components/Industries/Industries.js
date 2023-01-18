import Function from "./Function/Function";
import IndustriesBanner from "./IndustriesBanner/IndustriesBanner";
import IndustriesSections from "./IndustriesSections/IndustriesSections";
import LetUs from "./LetUs/LetUs";

const Industries = () => {
    return (
      <div className="bg-white">
        <div>
          <IndustriesBanner />
        </div>
        <div>
          <IndustriesSections />
        </div>
        <div>
          <Function />
        </div>
        <div>
          <LetUs/>
        </div>
      </div>
    );
};

export default Industries;