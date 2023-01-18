
import Banner from './Banner/Banner';
import IndustriesServe from './IndustriesServe/IndustriesServe';
import ModesWeServe from './ModesWeServe/ModesWeServe';
import Platfrom from './Platfrom/Platfrom';
import WhyCargocheck from './WhyCargocheck/WhyCargocheck';

const HomeIndex = () => {
    return (
      <div>
        <div>
          <Banner />
        </div>
        <div>
          <WhyCargocheck />
        </div>
        <div>
          <Platfrom />
        </div>
        <div>
          <IndustriesServe />
        </div>
        <div>
          <ModesWeServe />
        </div>
      </div>
    );
};

export default HomeIndex;