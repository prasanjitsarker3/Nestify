import AboutGallery from "@/components/pages/AboutGallery";
import AboutMainBanner from "@/components/pages/AboutMainBanner";
import ContactBanner from "@/components/pages/ContactBanner";
import WhyWeAre from "@/components/pages/WhyWeAre";
import React from "react";

const AboutMainPage = () => {
  return (
    <div>
      <AboutMainBanner />
      <AboutGallery />
      <WhyWeAre />
      <ContactBanner />
    </div>
  );
};

export default AboutMainPage;
