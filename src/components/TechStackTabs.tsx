"use client";

import { useState } from "react";
import Image from "next/image";

interface TechItem {
  image: string;
  title: string;
}

interface Category {
  name: string;
  id: string;
  items: TechItem[];
}

interface TechStackTabsProps {
  categories: Category[];
}

export default function TechStackTabs({ categories }: TechStackTabsProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");

  const activeItems = categories.find((c) => c.id === activeCategory)?.items || [];

  return (
    <div className="tech-stack-list-container max-w-4xl mx-auto mt-12">
      {/* Tab Buttons */}
      <div className="tech-stack-list-button-column flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`tech-stack-list-button px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
              activeCategory === category.id
                ? "bg-[#0058EE] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tech-stack-list-content-column mt-8 sm:mt-10">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {activeItems.map((item) => (
            <div key={item.title} className="text-center">
              <Image
                src={item.image}
                alt={`${item.title} logo`}
                width={64}
                height={64}
                className="h-10 sm:h-12 md:h-16 w-auto mx-auto"
              />
              <p className="mt-2 text-xs sm:text-sm truncate">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
