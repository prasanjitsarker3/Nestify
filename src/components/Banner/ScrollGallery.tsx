"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollGallery = () => {
  const images = [
    {
      id: 1,
      img: "/Photo/FirstH.avif",
    },
    {
      id: 2,
      img: "/Photo/SecondH.avif",
    },
    {
      id: 3,
      img: "/Photo/Third3.avif",
    },
    {
      id: 4,
      img: "/Photo/FourH.avif",
    },
  ];

  const statsData = [
    {
      id: 1,
      value: "8k",
      title: "Interior Projects",
      description: "Designs we have finished in last 32 years.",
    },
    {
      id: 2,
      value: "31",
      title: "Years of Works",
      description: "Designs we have finished in last 32 years.",
    },
    {
      id: 3,
      value: "12k",
      title: "Satisfied Clients",
      description: "Designs we have finished in last 32 years.",
    },
    {
      id: 4,
      value: "97%",
      title: "Happy Rate",
      description: "Designs we have finished in last 32 years.",
    },
  ];

  return (
    <div className=" w-full container mx-auto py-12">
      {
        <Marquee gradient={false} speed={20}>
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.img}
              alt="gallery"
              width={400}
              height={400}
              className="mx-6"
            />
          ))}
        </Marquee>
      }

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-12">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center space-y-2"
            >
              <h2 className="text-5xl font-bold text-teal-800">{item.value}</h2>
              <h3 className="text-xl font-medium text-teal-700">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollGallery;
