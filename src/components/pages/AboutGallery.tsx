import Image from "next/image";
import React from "react";

const AboutGallery = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        {/* Heading Section */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-teal-900 leading-tight">
            At NextSpace, we are passionate about creating exceptional interior
            and designs that elevate lifestyles and enrich experiences.
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className=" grid grid-cols-12 gap-4">
          <div className=" col-span-4 h-96  ">
            <Image
              src={
                "https://img.freepik.com/free-photo/group-business-people-walking-glass-walkway_1262-741.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
              }
              alt=""
              width={400}
              height={400}
              className=" h-full w-full object-cover"
            />
          </div>
          <div className=" col-span-8 ">
            <div className=" grid grid-cols-12 gap-4">
              <div className=" col-span-4  h-60">
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/three-architects-discussing-design-new-house-flat_141188-3429.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                  }
                  alt=""
                  width={400}
                  height={400}
                  className=" h-full w-full object-cover"
                />
              </div>
              <div className=" col-span-4  h-96 -mt-36">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/young-couple-buying-new-home-examining-blueprints-with-real-estate-agent-while-wearing-face-masks_637285-10940.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                  }
                  alt=""
                  width={400}
                  height={400}
                  className=" h-full w-full object-cover"
                />
              </div>
              <div className=" col-span-4  h-72 -mt-12">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/interior-designer-working-with-young-couple-lovely-family-professional-designer-architector-discussing-conept-future-interior-working-with-colour-palette-room-drawings-modern-office_155003-34234.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                  }
                  alt=""
                  width={400}
                  height={400}
                  className=" h-full w-full object-cover"
                />
              </div>
            </div>
            <div className=" grid grid-cols-12 gap-4 pt-4">
              <div className=" col-span-5   h-60">
                <Image
                  src={
                    "https://img.freepik.com/free-photo/smiling-business-people-having-meeting-cafe_1262-1955.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                  }
                  alt=""
                  width={400}
                  height={400}
                  className=" h-full w-full object-cover"
                />
              </div>
              <div className=" col-span-5 h-60">
                <Image
                  src={
                    "https://img.freepik.com/premium-photo/creative-team-with-blueprint-working-office_380164-215339.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                  }
                  alt=""
                  width={400}
                  height={400}
                  className=" h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
