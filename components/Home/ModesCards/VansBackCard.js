
const VansBackCard = ({ containers, btn }) => {
  return (
    <div
      style={{
        background: "rgba(50, 152, 255, 0.05)",
        backdropFilter: "blur(5px)",
      }}
      className="flex  p-5 rounded-xl lg:flex-row flex-col text-center justify-center lg:text-start items-center gap-8"
    >
      <div
        className="h-[266px] w-[237px] relative"
        style={{
          backgroundImage: `url(${containers.src})`,
        }}
      >
        <h3 className="text-3xl font-bold text-white absolute top-[35%] left-[20%] text-center z-40">
          Vans <br /> & <br /> Fletbeds
        </h3>
      </div>
      <div>
        <div>
          <h3
            style={{ fontSize: "24px" }}
            className="font-bold text-primary mb-3"
          >
            The Challenge:
          </h3>
          <p className="text-secondary text-base font-light">
            Paper-driver procedures for ports and <br /> consignees add time.
          </p>
        </div>
        <div>
          <h3
            style={{ fontSize: "24px" }}
            className="font-bold text-primary mb-3 mt-5"
          >
            Our Solution:
          </h3>
          <p className="text-secondary text-base font-light">
            Digitized load sheets and checklists speeds up <br /> loading and
            unloading.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VansBackCard;