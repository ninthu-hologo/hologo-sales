"use client";

import { useState } from "react";

// Define your categories with their respective iframe sources
const categories = [
  { id: 1, name: "Animal Cells", iframeSrc: "https://testweb.hologo.world/embed/524b901b-f1d7-4b5b-8eba-71f1f55b6282" },
  { id: 2, name: "Teeth", iframeSrc: "https://testweb.hologo.world/embed/f1e6f0ec-b084-4731-9997-b076f9724770" },
];

export default function ExperienceViewer() {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <div className="w-full mx-auto px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Don't take our word for it
          </h2>
          <p className="text-lg text-indigo-200/65">
            We provide tech-first solutions that empower decision-makers to
            build healthier and happier workspaces from anywhere in the world.
          </p>
        </div>
      </div>
      <div className="py-12">
        {/* Category Buttons */}
        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  activeCategory === category.id
                    ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.indigo.500/0),theme(colors.indigo.500/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]"
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

        {/* Fixed Size Iframe */}
        <div className="relative mx-auto" style={{ width: "1200px", height: "675px" }}>
          {categories.map(
            (category) =>
              activeCategory === category.id && (
                <iframe
                  key={category.id}
                  src={category.iframeSrc}
                  className="absolute top-0 left-0"
                  title={`${category.name} Experience`}
                  frameBorder="0"
                  allowFullScreen
                  width="1200"
                  height="700"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}
