import Image from "next/image";
import React from "react";

const ServiceContent = () => {
  const features = [
    {
      id: "01",
      title: "Ergonomic design solutions",
      description:
        "Once construction is complete, the designer/architect conducts a final inspection of the project.",
    },
    {
      id: "02",
      title: "Custom and cabinetry design",
      description:
        "Once construction is complete, the designer/architect conducts a final inspection of the project.",
    },
    {
      id: "03",
      title: "Workplace wellness design",
      description:
        "Once construction is complete, the designer/architect conducts a final inspection of the project.",
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Section */}
          <div className="relative aspect-[4/4] w-full">
            <Image
              src="/Photo/ServiceFirst.avif"
              alt="Modern office interior with wooden panels"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-12">
            <h2 className="text-4xl font-medium text-teal-900">
              Office Space Interior
            </h2>

            <div className="space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="grid grid-cols-[48px_1fr] gap-6"
                >
                  <div className="text-xl text-gray-400 font-light">
                    {feature.id}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl text-teal-900 font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content Section */}
          <div className="space-y-12">
            <h2 className="text-4xl font-medium text-teal-900">
              Office Space Interior
            </h2>

            <div className="space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="grid grid-cols-[48px_1fr] gap-6"
                >
                  <div className="text-xl text-gray-400 font-light">
                    {feature.id}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl text-teal-900 font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Image Section */}
          <div className="relative aspect-[4/4] w-full">
            <Image
              src="/Photo/ServiceSeocnd.avif"
              alt="Modern office interior with wooden panels"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Section */}
          <div className="relative aspect-[4/4] w-full">
            <Image
              src="/Photo/ServiceThird.avif"
              alt="Modern office interior with wooden panels"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-12">
            <h2 className="text-4xl font-medium text-teal-900">
              Office Space Interior
            </h2>

            <div className="space-y-8">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="grid grid-cols-[48px_1fr] gap-6"
                >
                  <div className="text-xl text-gray-400 font-light">
                    {feature.id}
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl text-teal-900 font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
