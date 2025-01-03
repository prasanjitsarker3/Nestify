import React from "react";

const ServiceBanner = () => {
  return (
    <div>
      <div className="relative h-[60vh] w-full overflow-hidden">
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
        <div className="w-full container mx-auto relative z-10 flex h-[60vh] items-center justify-center text-white">
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
            <div className="space-y-8 text-center">
              <h1 className="text-5xl font-light leading-tight text-white brightness-200 sm:text-6xl lg:text-7xl">
                Transforming Properties,
                <br />
                Building Futures.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
