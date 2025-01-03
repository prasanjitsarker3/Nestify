import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const HomeProject = () => {
  return (
    <div className=" w-full container mx-auto py-20 ">
      <div className="">
        <h1 className=" text-lg font-normal primaryColor">Works</h1>
        <h1 className=" text-5xl font-bold primaryColor">Our Projects </h1>
        <h1 className=" text-5xl font-bold primaryColor">& Designs</h1>
      </div>
      <div className=" grid grid-cols-12 gap-20">
        <div className=" col-span-4 py-24 ">
          <div className=" space-y-32">
            <div className="">
              <Image
                src={"/Photo/P1.avif"}
                alt=""
                width={400}
                height={400}
                className=" h-full w-full"
              />
              <div className=" flex justify-between items-center text-nowrap flex-nowrap pt-2">
                <h1 className=" flex items-center gap-1 font-semibold text-2xl primaryColor">
                  <span className=" w-2 h-2 bg-[#004643]"></span> D-Orex Home
                  Interior
                </h1>
                <p>Milwaukee</p>
                <MoveUpRight className="w-6 h-6 text-[#004643]" />
              </div>
            </div>
            <div className="">
              <Image
                src={"/Photo/P2.avif"}
                alt=""
                width={400}
                height={400}
                className=" h-full w-full"
              />
              <div className=" flex justify-between items-center text-nowrap flex-nowrap pt-2">
                <h1 className=" flex items-center gap-1 font-semibold text-2xl primaryColor">
                  <span className=" w-2 h-2 bg-[#004643]"></span> D-Orex Home
                  Interior
                </h1>
                <p>Milwaukee</p>
                <MoveUpRight className="w-6 h-6 text-[#004643]" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-4 ">
          <div className=" space-y-12">
            <div>
              <Image
                src={"/Photo/P3.avif"}
                alt=""
                width={400}
                height={400}
                className=" h-full w-full"
              />
              <div className=" flex justify-between items-center text-nowrap flex-nowrap pt-2">
                <h1 className=" flex items-center gap-1 font-semibold text-2xl primaryColor">
                  <span className=" w-2 h-2 bg-[#004643]"></span> D-Orex Home
                  Interior
                </h1>
                <p>Milwaukee</p>
                <MoveUpRight className="w-6 h-6 text-[#004643]" />
              </div>
            </div>
            <div>
              <Image
                src={"/Photo/P4.avif"}
                alt=""
                width={400}
                height={400}
                className=" h-full w-full"
              />
              <div className=" flex justify-between items-center text-nowrap flex-nowrap pt-2">
                <h1 className=" flex items-center gap-1 font-semibold text-2xl primaryColor">
                  <span className=" w-2 h-2 bg-[#004643]"></span> D-Orex Home
                  Interior
                </h1>
                <p>Milwaukee</p>
                <MoveUpRight className="w-6 h-6 text-[#004643]" />
              </div>
            </div>
            <div>
              <Image
                src={"/Photo/P3.avif"}
                alt=""
                width={400}
                height={400}
                className=" h-full w-full"
              />
              <div className=" flex justify-between items-center text-nowrap flex-nowrap pt-2">
                <h1 className=" flex items-center gap-1 font-semibold text-2xl primaryColor">
                  <span className=" w-2 h-2 bg-[#004643]"></span> D-Orex Home
                  Interior
                </h1>
                <p>Milwaukee</p>
                <MoveUpRight className="w-6 h-6 text-[#004643]" />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-span-4 py-24 ">
          <div className=" space-y-32">
            <div className="">
              <Image
                src={"/Photo/P1.avif"}
                alt=""
                width={400}
                height={400}
                className=" h-full w-full"
              />
              <div className=" flex justify-between items-center text-nowrap flex-nowrap pt-2">
                <h1 className=" flex items-center gap-1 font-semibold text-2xl primaryColor">
                  <span className=" w-2 h-2 bg-[#004643]"></span> D-Orex Home
                  Interior
                </h1>
                <p>Milwaukee</p>
                <MoveUpRight className="w-6 h-6 text-[#004643]" />
              </div>
            </div>
            <div className="">
              <Image
                src={"/Photo/P2.avif"}
                alt=""
                width={400}
                height={400}
                className=" h-full w-full"
              />
              <div className=" flex justify-between items-center text-nowrap flex-nowrap pt-2">
                <h1 className=" flex items-center gap-1 font-semibold text-2xl primaryColor">
                  <span className=" w-2 h-2 bg-[#004643]"></span> D-Orex Home
                  Interior
                </h1>
                <p>Milwaukee</p>
                <MoveUpRight className="w-6 h-6 text-[#004643]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProject;
