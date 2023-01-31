import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const FaqCollapse = () => {
  const [open, SetIsOpen] = useState(true);
  const faq = [
    {
      name: "Why ChargoCheck?",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid suscipit dolor nulla corrupti voluptate? Soluta, eos veritatis ab nihil, reiciendis deserunt qui quam quas aliquid reprehenderit iure? Doloremque animi blanditiis accusamus excepturi aperiam. Cupiditate, iste. Adipisci neque quia voluptatibus possimus. Voluptates reprehenderit nisi tenetur. Nemo repellendus illo nobis iusto.",
    },
    {
      name: "How We Work at ChargoCheck?",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid suscipit dolor nulla corrupti voluptate? Soluta, eos veritatis ab nihil, reiciendis deserunt qui quam quas aliquid reprehenderit iure? Doloremque animi blanditiis accusamus excepturi aperiam. Cupiditate, iste. Adipisci neque quia voluptatibus possimus. Voluptates reprehenderit nisi tenetur. Nemo repellendus illo nobis iusto.",
    },
    {
      name: "What is the different industries we target?",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid suscipit dolor nulla corrupti voluptate? Soluta, eos veritatis ab nihil, reiciendis deserunt qui quam quas aliquid reprehenderit iure? Doloremque animi blanditiis accusamus excepturi aperiam. Cupiditate, iste. Adipisci neque quia voluptatibus possimus. Voluptates reprehenderit nisi tenetur. Nemo repellendus illo nobis iusto.",
    },
    {
      name: "Is ChargoCheck Secure?",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid suscipit dolor nulla corrupti voluptate? Soluta, eos veritatis ab nihil, reiciendis deserunt qui quam quas aliquid reprehenderit iure? Doloremque animi blanditiis accusamus excepturi aperiam. Cupiditate, iste. Adipisci neque quia voluptatibus possimus. Voluptates reprehenderit nisi tenetur. Nemo repellendus illo nobis iusto.",
    },
    {
      name: "How ChargoCheck is better?",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, aliquid suscipit dolor nulla corrupti voluptate? Soluta, eos veritatis ab nihil, reiciendis deserunt qui quam quas aliquid reprehenderit iure? Doloremque animi blanditiis accusamus excepturi aperiam. Cupiditate, iste. Adipisci neque quia voluptatibus possimus. Voluptates reprehenderit nisi tenetur. Nemo repellendus illo nobis iusto.",
    },
  ];
  // useEffect(()=> 
  // fetch("")
  // ,[])
  return (
    <div className="my-[8rem] sm:max-w-xl md:max-w-full lg:max-w-screen-xl mx-auto">
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-white">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  my-4 gap-8">
            {faq?.map((item, idx) => (
              <details key={idx} className="w-full border rounded-lg">
                <summary
                  onClick={() => SetIsOpen(!open)}
                  className="px-4 py-4  cursor-pointer focus:outline-none text-primary font-bold flex items-center justify-between"
                  style={{ fontSize: "24px" }}
                >
                  {item?.name}
                  {open ? <FaPlus /> : <FaMinus />}
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-secondary text-lg font-light">
                  Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                  nullam taciti at adipiscing est.{" "}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqCollapse;
