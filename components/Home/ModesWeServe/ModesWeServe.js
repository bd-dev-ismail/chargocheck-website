
import ModesCards from '../ModesCards/ModesCards';

const ModesWeServe = () => {
    return (
      <div className="mt-[5rem] mb-[3rem]">
        <div className="text-center mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <h3
            style={{ fontSize: "32px" }}
            className="text-primary font-bold mb-4"
          >
            Modes We Serve
          </h3>
          <p className="text-xl font-light">
            With CargoCheck, drivers and operators know how to safely,
            efficiently <br /> handle chemical shipments of all shapes and
            sizes.
          </p>
        </div>
        <div>
          <ModesCards />
        </div>
      </div>
    );
};

export default ModesWeServe;