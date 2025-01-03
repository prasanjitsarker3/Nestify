"use client";
import { MoveDownLeft, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = () => {
  // Define the testimonials array
  const testimonials = [
    {
      quote:
        "We specialize in transforming visions into reality. Explore our portfolio of innovative architectural and interior design projects crafted with precision.",
      name: "Jhon Doe",
      title: "Founder, BramBram",
    },
    {
      quote:
        "Their team helped us bring our ideas to life, creating spaces that are both functional and aesthetically pleasing design projects crafted with precision",
      name: "Jane Smith",
      title: "CEO, DesignTech",
    },
    {
      quote:
        "An incredible experience from start to finish. They turned our dream designs into a reality design projects crafted with precision",
      name: "Alice Johnson",
      title: "Creative Director, SpaceWorks",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the testimonial every 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Move to the next testimonial
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000); // Delay of 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [currentIndex]);

  const { quote, name, title } = testimonials[currentIndex];

  return (
    <div className="bg-[#0B3B36]">
      <section className="w-[100%] grid md:grid-cols-2 min-h-screen">
        {/* Left Column - Testimonial Content */}
        <div className="max-w-2xl mx-auto text-white p-8 md:p-16 flex flex-col justify-center">
          <div className="space-y-6 relative">
            <h2 className="text-sm tracking-wider">TESTIMONIALS</h2>

            <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-12">
              Client Stories
            </h3>

            <motion.blockquote
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-12"
              initial={{ x: 1000 }} // Always start from the right
              animate={{ x: 0 }} // Move to the center
              exit={{ x: -1000 }} // Exit to the left
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                duration: 2, // Slow transition duration
              }}
            >
              &quot;{quote}&quot;
            </motion.blockquote>
            <div className=" flex items-center justify-between">
              <div className="space-y-2">
                <p className="text-xl font-medium">{name}</p>
                <p className="text-gray-400">{title}</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + testimonials.length) %
                        testimonials.length
                    )
                  }
                  className="p-2 text-white rounded-full cursor-pointer"
                >
                  <MoveDownLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % testimonials.length)
                  }
                  className="p-2 text-white rounded-full cursor-pointer"
                >
                  <MoveUpRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <Image
            src="/Photo/Testi.avif"
            alt="Modern interior design with elegant furniture"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </div>
  );
};

export default TESTIMONIALS;
