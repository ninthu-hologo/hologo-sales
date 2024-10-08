"use client";

import { useState } from "react";

// Define your categories with their respective iframe sources
const categories = [
  {
    id: 1,
    name: "Animal Cells",
    iframeSrc:
      "https://testweb.hologo.world/embed/524b901b-f1d7-4b5b-8eba-71f1f55b6282",
  },
  {
    id: 2,
    name: "Teeth",
    iframeSrc:
      "https://testweb.hologo.world/embed/f1e6f0ec-b084-4731-9997-b076f9724770",
  },
];

export default function ExperienceViewer() {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <div className="w-full mx-auto px-4 sm:px-6">
      <div className="m-auto w-[85%] md:w-[70%] rounded-xl py-12 md:py-32 bg-gradient-to-r from-[#a8bfee] to-[#fd9f7f]">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center ">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.red.500),theme(colors.indigo.500),theme(colors.red.500),theme(colors.indigo.500),theme(colors.red.500))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Trailblazing Interactive Education.
          </h2>
          <p className="text-lg text-[#1b2124] mt-6 px-6 md:px-12">
            We are a digital education resource with 1000+ 3D, Augmented
            Reality, and Virtual Reality educational experiences. Use Hologo in
            your school and have students learn what we do by recreating our
            experiences.
          </p>
        </div>
      </div>

      <div className="py-12">
        {/* Category Buttons */}
        <div className="flex justify-center pb-12 md:pb-16">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-[#797b7a] p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  activeCategory === category.id
                    ? "relative bg-gradient-to-b from-[#363939] via-[#1f2223] to-[#363939] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
              >
                <svg
                  className={`fill-current ${
                    activeCategory === category.id
                      ? "text-indigo-500"
                      : "text-gray-600"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 34 34"
                  fill="currentColor"
                >
                  <path
                    d="M20.152,16l4.9-8.461L27.42,16,25.052,24.46,20.152,16Zm-2.388,1.374,4.9,8.46L14.13,23.648,7.964,17.375Zm4.9-11.21-4.9,8.461h-9.8L14.13,8.352l8.534-2.188Zm7,6.957L26.669,2,15.511,4.98l-1.652,2.9L10.508,7.86,2.341,16l8.167,8.139h0l3.35-.025,1.654,2.9L26.669,30l2.989-11.119L27.961,16l1.7-2.879Z"
                    style={{ fill: "#cfcfcf" }}
                  />
                </svg>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Iframe */}
        <div className="relative w-full h-0 pb-[56.25%] md:pb-[56.25%]">
          {/* 16:9 for larger screens */}
          {categories.map(
            (category) =>
              activeCategory === category.id && (
                <iframe
                  key={category.id}
                  src={category.iframeSrc}
                  className="absolute top-0 left-0 w-full h-full"
                  title={`${category.name} Experience`}
                  frameBorder="0"
                  allowFullScreen
                />
              )
          )}
        </div>

        {/* CSS Media Query for 9:16 aspect ratio for mobile */}
        <style jsx>{`
          @media (max-width: 767px) {
            .relative.w-full.h-0 {
              padding-bottom: 177.78%; /* 9:16 aspect ratio */
            }
          }
        `}</style>
      </div>
    </div>
  );
}
