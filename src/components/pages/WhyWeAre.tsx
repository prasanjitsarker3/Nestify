import Image from "next/image";
import React from "react";

const WhyWeAre = () => {
  const workData = [
    {
      id: 1,
      title: "Work-Life Balance",
      description:
        "Cultivating a healthy work-life balance demonstrates an organization's commitment to employee well-being.",
      icon: "/Photo/W1.avif",
    },
    {
      id: 2,
      title: "Professional Development",
      description:
        "A culture that prioritizes professional development encourages continuous learning, growth, and advancement.",
      icon: "/Photo/W2.avif",
    },
    {
      id: 3,
      title: "Wellness and Health",
      description:
        "Prioritizing employee wellness and health initiatives demonstrates a commitment to overall well-being.",
      icon: "/Photo/W3.avif",
    },
  ];
  return (
    <div className=" w-full container mx-auto ">
      <div className=" text-xl font-normal primaryColor space-y-2 text-center">
        <h1>The Callenge</h1>
        <h1 className=" text-5xl font-bold text-[#004643]">
          What We <br /> Offer
        </h1>
      </div>
      <div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-6 py-20">
          {workData.map((item, index) => (
            <div key={index}>
              <div className=" w-full mx-auto">
                <Image
                  src={item.icon}
                  alt=""
                  width={400}
                  height={400}
                  className=" mx-auto flex justify-center"
                />
              </div>
              <div>
                <h1 className=" text-2xl font-medium text-[#004643] text-center">
                  {item.title}
                </h1>
                <p className=" text-center primaryColor px-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyWeAre;
