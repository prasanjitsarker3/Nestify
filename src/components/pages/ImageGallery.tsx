import React from "react";
import Image from "next/image";
import { Book, Eye } from "lucide-react";

const ImageGallery = () => {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2721.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      alt: "Living Room",
      name: "Modern Living Room",
      location: "Bangkok, Thailand",
    },
    {
      src: "https://img.freepik.com/free-photo/living-room-modern-apartment-with-two-identical-sofas-opposite-each-other_181624-14768.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      alt: "Bedroom",
      name: "Cozy Apartment",
      location: "New York, USA",
    },
    {
      src: "https://img.freepik.com/free-photo/cozy-living-room-interior-with-panoramic-window_1262-12322.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      alt: "Blueprints",
      name: "Panoramic View Room",
      location: "Paris, France",
    },
    {
      src: "https://img.freepik.com/free-photo/3d-rendering-white-wood-living-room-near-bedroom-upstair_105762-2197.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      alt: "Cozy Kitchen",
      name: "Rustic Kitchen",
      location: "Rome, Italy",
    },
    {
      src: "https://img.freepik.com/premium-photo/living-room-residential-home-with-sofas-upholstered_449839-26764.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      alt: "Luxury Bathroom",
      name: "Elegant Living Room",
      location: "London, UK",
    },
    {
      src: "https://img.freepik.com/free-photo/modern-living-room-interior-design_23-2150794726.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      alt: "Office",
      name: "Modern Workspace",
      location: "Tokyo, Japan",
    },
    {
      src: "https://img.freepik.com/free-photo/realistic-modern-interior-design_23-2151439814.jpg?uid=R141745868&ga=GA1.1.406508785.1728154460&semt=ais_hybrid",
      alt: "Modern Kitchen",
      name: "Luxurious Kitchen",
      location: "Dubai, UAE",
    },
  ];

  const columnLayout = [
    [0, 1], // First column
    [2, 3, 4], // Second column
    [5, 6], // Third column
  ];

  return (
    <div className="w-full container mx-auto md:px-0 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">
        Real Estate Gallery
      </h2>
      <div className="grid grid-cols-12 gap-24">
        {columnLayout.map((indices, columnIndex) => (
          <div
            key={columnIndex}
            className={` col-span-4 ${
              indices.length > 2
                ? "space-y-10"
                : "flex flex-col justify-center space-y-12"
            }`}
          >
            {indices.map((index) => (
              <div
                key={index}
                className={`relative group overflow-hidden ${
                  indices.length > 2 ? "h-72" : "h-80"
                } bg-red-400 transform transition-transform duration-300 group-hover:scale-110`}
              >
                <Image
                  src={images[index].src}
                  alt={images[index].alt}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-lg font-bold mb-2">
                    {images[index].name}
                  </h3>
                  <p className="text-white text-sm mb-4">
                    {images[index].location}
                  </p>
                  <div className="flex space-x-4">
                    <button className="text-white  p-2 rounded-full">
                      <Eye className="text-xl" />
                    </button>
                    <button className="text-white p-2 rounded-full ">
                      <Book className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
