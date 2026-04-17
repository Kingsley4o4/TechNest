"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ICONS, { CategoryIcon } from "@/data/Icons_Img";

export default function Category() {
  return (
    <div className="pt-10 bg-[#F5F5F5] lg:py-16">
      <main>
        <div className="flex flex-col lg:mx-page-x mx-page-x-mobile ">
          <div className="flex items-center justify-between">
            <h1 className="font-normal lg:text-section-title">
              Browse by Category
            </h1>
            <div className="flex items-center gap-2">
              <ChevronLeft strokeWidth={1.2} size={30} />
              <ChevronRight strokeWidth={1.2} size={30} />
            </div>
          </div>

          {/* CATEGORY LIST */}
          <div className="grid grid-cols-2 lg:flex lg:justify-center gap-3 lg:gap-4 mt-10">
            {ICONS.map(({ icon: Icon, name }: CategoryIcon, index) => {
              return (
                <div
                  key={index}
                  className="rounded-lg h-34 flex-1 lg:flex lg:w-36 flex items-center justify-center gap-2 bg-[#EDEDED]"
                >
                  <div className="flex flex-col items-center justify-center gap-5">
                    <Icon strokeWidth={1.1} size={40} />
                    <span className="text-sm">{name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
