import MainBanner from "@/components/Banner/MainBanner";
import ScrollGallery from "@/components/Banner/ScrollGallery";
import ContactBanner from "@/components/pages/ContactBanner";
import HomeProject from "@/components/pages/HomeProject";
import Service from "@/components/pages/Service";
import TESTIMONIALS from "@/components/pages/TESTIMONIALS";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <ScrollGallery />
      <TESTIMONIALS />
      <Service />
      <HomeProject />
      <ContactBanner />
    </div>
  );
};

export default HomePage;
