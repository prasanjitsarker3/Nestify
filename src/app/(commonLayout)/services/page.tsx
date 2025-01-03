import ContactBanner from "@/components/pages/ContactBanner";
import ServiceBanner from "@/components/pages/ServiceBanner";
import ServiceContent from "@/components/pages/ServiceConytent";
import TESTIMONIALS from "@/components/pages/TESTIMONIALS";
import React from "react";

const ServicePage = () => {
  return (
    <div>
      <ServiceBanner />
      <ServiceContent />
      <TESTIMONIALS />
      <ContactBanner />
    </div>
  );
};

export default ServicePage;
