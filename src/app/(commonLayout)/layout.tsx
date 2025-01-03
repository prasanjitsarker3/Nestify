import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React, { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
