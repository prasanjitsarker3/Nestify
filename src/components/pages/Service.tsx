"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const serviceData = [
    {
      id: 1,
      title: "Home Decoraction",
      description:
        "Efficient use of space is crucial in home interior design. Consider the layout of furniture.",
      image: "/Photo/ServiceFirst.avif",
    },
    {
      id: 2,
      title: "Home Decoraction",
      description:
        "Efficient use of space is crucial in home interior design. Consider the layout of furniture.",
      image: "/Photo/ServiceSeocnd.avif",
    },
    {
      id: 3,
      title: "Home Decoraction",
      description:
        "Efficient use of space is crucial in home interior design. Consider the layout of furniture.",
      image: "/Photo/ServiceThird.avif",
    },
  ];

  const processSteps = [
    {
      number: "SERVICES",
      title: "Our Working ",
      description: "Process",
    },
    {
      number: "01",
      title: "Initial Consultation",
      description:
        "The process often begins with an initial consultation between the designer/architect. Get started from here.",
    },
    {
      number: "02",
      title: "Concept Development",
      description:
        "In this stage, the designer/architect gathers detailed information about the project requirements.",
    },
    {
      number: "03",
      title: "Design Development",
      description:
        "Depending on the project scope and location, the designer/architect may assist the client in obtaining.",
    },
    {
      number: "04",
      title: "Permitting & Approvals",
      description:
        "Depending on the project scope and location, the designer/architect may assist the client. We work to make you 100% happy.",
    },
    {
      number: "05",
      title: "Project Closeout",
      description:
        "Once construction is complete, the designer/architect conducts a final inspection of the project.",
    },
  ];
  return (
    <div>
      <div className=" w-full container mx-auto py-12">
        <div>
          <h1 className="tex-lg font-medium primaryColor">Services</h1>
          <div className=" flex justify-between items-center">
            <div className=" text-4xl font-bold  text-[#004643]">
              <h1>Get your dream home</h1>
              <h1>with expert help.</h1>
            </div>
            <button className=" bg-[#004643] py-4 px-12 text-lg font-medium text-white rounded-full flex items-center gap-2">
              Get in touch <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 py-12">
          {serviceData.map((item, index) => (
            <div key={item.id} className="flex flex-col space-y-4">
              <div className="relative w-full h-[35rem] flex items-end">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className={` ${index === 1 ? "h-[35rem]" : "h-[30rem]"}`}
                />
              </div>
              <div className=" text-center">
                <h3 className="text-2xl font-medium text-[#1B4B43]">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0B3B36] py-20">
        <div className=" w-full container mx-auto md:px-0 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`p-6 h-64 transition-all duration-300 relative ${
                  index === 0
                    ? "text-white"
                    : " hover:backdrop-blur-0 hover:bg-white/5"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {index === 0 ? (
                  <>
                    <div>
                      <h2 className="text-sm tracking-wider mb-6">SERVICES</h2>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-16">
                        Our Working
                        <br />
                        Process
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <span
                      className={`text-2xl text-white font-medium mb-4 block transition-transform duration-500 ${
                        hoveredIndex === index ? "transform -translate-y-2" : ""
                      }`}
                    >
                      {step.number}
                    </span>
                    <h4 className="text-2xl font-medium mb-4 text-white">
                      {step.title}
                    </h4>
                    <p className=" text-gray-200 leading-relaxed">
                      {step.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
