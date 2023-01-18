
const ContainerCard = ({vans, btn}) => {
    return (
      <div
        className="h-[314px] w-[208px] relative"
        style={{
          backgroundImage: `url(${vans.src})`,
        }}
      >
        <h3 className="text-3xl font-bold text-white absolute top-[40%] left-[15%] text-center z-40">
          Containers <br /> & <br /> ISOtainers
        </h3>
      </div>
    );
};

export default ContainerCard;