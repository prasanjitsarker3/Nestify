import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#004643] rounded-t-3xl">
      <footer className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-normal text-white leading-tight">
              Discover Real state Ideas from your own Ease!
            </h2>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-100 hover:text-white">
                Home
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                About Us
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Our Agents
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Main Pages */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Main Pages</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-100 hover:text-white">
                FAQ
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Blogs
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Properties
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Properties type
              </Link>
            </nav>
          </div>

          {/* Other */}
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-white">Other</h3>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-gray-100 hover:text-white">
                bedrooms
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Categories
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Error 404
              </Link>
              <Link href="#" className="text-gray-100 hover:text-white">
                Form Submit
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <p className="text-gray-100 mb-4 md:mb-0">Copyright @2024</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-gray-100 hover:text-white">
              Framer
            </Link>
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <Link href="#" className="text-gray-100 hover:text-white">
              Templates
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
