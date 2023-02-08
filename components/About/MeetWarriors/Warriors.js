import member1 from '/assets/warriors1.png';
import member2 from '/assets/warriors2.png';
import member3 from '/assets/warriors3.png';
const Warriors = () => {
    const Allwarriors = [
      {
        img: member1,
        name: "Kathy Green",
        title: "Co-founder and CEO",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus blandit ligula sodales sed. Pretium nunc pellentesque nascetur suscipit. Tellus vivamus egestas amet quis. ",
      },
      {
        img: member2,
        name: "Jhon Wick",
        title: "Co-founder & Chief Scientist",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus blandit ligula sodales sed. Pretium nunc pellentesque nascetur suscipit. Tellus vivamus egestas amet quis. ",
      },
      {
        img: member3,
        name: "Ken Adams",
        title: "Founding Engineer & Head of ML",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget lacus blandit ligula sodales sed. Pretium nunc pellentesque nascetur suscipit. Tellus vivamus egestas amet quis. ",
      },
    ];
    return (
      <>
        {Allwarriors?.map((item, idx) => (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={item.img.src} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 style={{fontSize: '24px'}} className="card-title text-primary font-bold">{item?.name}</h2>
              <p>{item?.title}</p>
              <p>{item?.desc}</p>
            </div>
          </div>
        ))}
      </>
    );
};

export default Warriors;