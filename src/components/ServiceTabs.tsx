"use client";

import { useState } from "react";
import type { ServiceSection } from "@/content/services";

interface ServiceTabsProps {
  sections: ServiceSection[];
}

export default function ServiceTabs({ sections }: ServiceTabsProps) {
  const [activeItem, setActiveItem] = useState(sections[0]?.items[0]?.targetId || "");

  // Flatten all items from all sections for the sidebar
  const allItems = sections.flatMap((s) => s.items);
  const currentItem = allItems.find((i) => i.targetId === activeItem);

  if (!sections.length || !allItems.length) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-4 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
        {/* Left Button Column - Sidebar Navigation */}
        <div className="interactive-list-button-column flex overflow-x-auto lg:overflow-visible lg:flex-col lg:w-1/3 border-b lg:border-b-0 lg:border-l border-gray-200 -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
          {allItems.map((item) => (
            <button
              key={item.targetId}
              onClick={() => setActiveItem(item.targetId)}
              className={`flex-shrink-0 text-left p-2 sm:p-3 lg:p-4 font-medium sm:font-semibold text-sm sm:text-base lg:text-lg border-b-4 lg:border-b-0 lg:border-l-4 transition-all whitespace-nowrap lg:whitespace-normal ${
                activeItem === item.targetId
                  ? "text-black border-[#0058EE]"
                  : "text-gray-500 border-transparent hover:text-black"
              }`}
            >
              {item.buttonText}
            </button>
          ))}
        </div>

        {/* Right Content Column */}
        <div className="content-column lg:w-2/3 mt-4 lg:mt-0">
          {currentItem && (
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{currentItem.title}</h2>
              <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base">
                <p>{currentItem.content}</p>

                {currentItem.listBlocks?.map((block, blockIndex) => (
                  <div key={blockIndex} className="mt-4 sm:mt-6">
                    {block.listSubtitle && (
                      <h4 className="font-semibold text-base sm:text-lg">{block.listSubtitle}</h4>
                    )}
                    {block.listSubtitlePara && (
                      <p className="mt-2">{block.listSubtitlePara}</p>
                    )}

                    {block.listItems && block.listItems.length > 0 && (
                      <ul className="list-disc list-outside ml-4 sm:ml-5 mt-2 space-y-1">
                        {block.listItems.map((listItem, itemIndex) => (
                          <li key={itemIndex}>{listItem}</li>
                        ))}
                      </ul>
                    )}

                    {block.listAfterPara && (
                      <p className="mt-2">{block.listAfterPara}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
