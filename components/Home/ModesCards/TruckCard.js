// import truck from "/assets/trucks.png";

const TruckCard = ({ truck ,btn}) => {
  return (
    <div
      className="h-[314px] w-[208px] relative"
      style={{
        backgroundImage: `url(${truck.src})`,
      }}
    >
      <h3 className="text-3xl font-bold text-white absolute top-[40%] left-[20%] text-center z-40">
        Bulk <br /> Trucks
      </h3>
    </div>
  );
};

export default TruckCard;
