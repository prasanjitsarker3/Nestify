"use client";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className=" relative">
      <div className="relative h-[80vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/MainBanner.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.9)",
          }}
        />
      </div>

      <div className=" relative -translate-y-80  z-30 w-full container mx-auto grid lg:grid-cols-2">
        {/* Form Section */}
        <div className="bg-teal-900 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-white/90 text-lg mb-12 leading-relaxed">
              We believe in collaboration and value your input throughout the
              design process. We encourage clients to actively participate in
              discussions, share their ideas, preferences, and feedback.
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-white">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-teal-700 text-white/80 placeholder:text-teal-700 pb-2 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="admin@nextspace.com"
                  className="w-full bg-transparent border-b border-teal-700 text-white/80 placeholder:text-teal-700 pb-2 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-white">
                  Inquire Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Want to decor my house"
                  className="w-full bg-transparent border-b border-teal-700 text-white/80 placeholder:text-teal-700 pb-2 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Write your messages..."
                  rows={4}
                  className="w-full bg-transparent border-b border-teal-700 text-white/80 placeholder:text-teal-700 pb-2 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
              >
                Send a message
              </button>
            </form>
          </div>
        </div>

        {/* Info Section */}
        <div className="">
          <div className="h-full p-8 lg:p-16 flex justify-end items-end">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-medium text-teal-900 mb-6">
                Interested in working with us!
              </h2>
              <p className="text-gray-600 mb-12">
                We encourage our team to fearlessly challenge conventions and
                pioneer new paths.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl text-teal-900 font-medium mb-2">
                    Working Mail
                  </h3>
                  <a
                    href="mailto:project@nextspace.com"
                    className="text-gray-600 hover:text-teal-900"
                  >
                    project@nextspace.com
                  </a>
                </div>
                <div>
                  <h3 className="text-xl text-teal-900 font-medium mb-2">
                    Office Phone
                  </h3>
                  <a
                    href="tel:+18929101982"
                    className="text-gray-600 hover:text-teal-900"
                  >
                    +1 892 910 1982
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-teal-900 font-medium mb-2">
                  Office Address
                </h3>
                <address className="text-gray-600 not-italic">
                  70 University Ave
                  <br />
                  Palo Alto, CA 94301
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
