import { ArrowRight } from "lucide-react";
import React from "react";

const MainBanner = () => {
  return (
    <div>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/MainBanner.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.9)",
          }}
        />

        {/* Content Overlay */}
        <div className="w-full container mx-auto relative z-10 flex min-h-screen items-center justify-center text-white">
          <div className="max-w-4xl">
            {/* Logo Badge */}
            <div className="absolute right-1/2  bottom-3.5 h-24 w-24 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <div className="flex h-full items-center justify-center text-center text-[10px] font-medium text-white/80">
                <div>
                  INTERIOR FIRM
                  <br />
                  SINCE 1992
                  <br />
                  BFS
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              <h1 className="text-5xl font-light leading-tight text-white brightness-200 sm:text-6xl lg:text-7xl">
                Elevating Spaces
                <br />
                Crafting Dreams
              </h1>

              <div className=" flex items-center space-x-8">
                <div className="max-w-xl space-y-4">
                  <p className="text-lg text-white/90">
                    We specialize in transforming visions into reality.
                  </p>
                  <p className="text-lg text-white/90">
                    Explore our work of innovative architectural.
                  </p>
                </div>

                <button className="bg-teal-800 px-6 py-6 text-base hover:bg-teal-700 flex items-center rounded-full">
                  Book an appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
