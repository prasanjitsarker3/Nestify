"use client";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ContactBanner = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqs = [
    {
      id: "01",
      question: "How involved can I be in the design process?",
      answer:
        "We believe in collaboration and value your input throughout the design process. We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.",
    },
    {
      id: "02",
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of design services including interior design, architectural planning, space optimization, and custom furniture solutions. Each service is tailored to meet your specific needs and preferences.",
    },
    {
      id: "03",
      question: "What is your design process?",
      answer:
        "Our design process is collaborative and iterative. We begin with an initial consultation, followed by concept development, detailed design planning, and implementation. We ensure constant communication and feedback throughout each phase.",
    },
    {
      id: "04",
      question: "How do you establish your design fees?",
      answer:
        "Our design fees are structured based on project scope, complexity, and timeline. We provide transparent pricing and detailed proposals outlining all costs before beginning any work.",
    },
    {
      id: "05",
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A typical residential project can take 3-6 months from concept to completion. We'll provide a detailed timeline during our initial consultation.",
    },
  ];

  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" /> {/* Overlay */}
          <Image
            src="/Photo/COntactB.avif" // Make sure to add your image to the public folder
            alt="Modern interior with leather sofa"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 pt-32 lg:pt-48">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-center font-normal text-white mb-6 leading-tight">
              Unlock Your Dream Home Today!
            </h1>
            <p className="text-lg md:text-xl text-center text-white/90 mb-8 max-w-2xl">
              We encourage clients to actively participate in discussions, share
              their ideas, preferences, and feedback.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-teal-800 hover:bg-teal-700 text-white rounded-full px-8 py-4 text-lg flex items-center gap-2">
                Get in touch
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-6 py-6 text-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call us: +1 483 944 954
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-16">
          {/* Left Section */}
          <div className="space-y-6">
            <p className="text-teal-800 font-medium">FAQS</p>
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-medium text-teal-900">
              Still Have A Question?
            </h2>
            <button className="inline-flex items-center px-6 py-4 bg-teal-800 hover:bg-teal-700 text-white rounded-full transition-colors group">
              See all FAQs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Right Section - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border rounded-2xl px-6 bg-white transition-colors py-8"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="flex items-center justify-between w-full text-left"
                  aria-expanded={openId === faq.id}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 text-xl font-light">
                      {faq.id}
                    </span>
                    <h3 className="text-xl text-teal-900 font-medium pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-teal-800 transition-transform duration-200 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`grid transition-all duration-200 ${
                    openId === faq.id
                      ? "grid-rows-[1fr] opacity-100 pt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
