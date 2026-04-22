"use client";

import { useState } from "react";
import { Search, ChevronUp, ChevronDown, CheckSquare, Square } from "lucide-react";

interface BrandItem {
  name: string;
  count: number;
  checked: boolean;
}

const initialBrands: BrandItem[] = [
  { name: "Apple", count: 110, checked: true },
  { name: "Samsung", count: 125, checked: false },
  { name: "Xiaomi", count: 68, checked: false },
  { name: "Poco", count: 44, checked: false },
  { name: "OPPO", count: 36, checked: false },
  { name: "Honor", count: 10, checked: false },
  { name: "Motorola", count: 34, checked: false },
  { name: "Nokia", count: 22, checked: false },
  { name: "Realme", count: 35, checked: false },
];

const collapsibleFilters = [
  "Battery capacity",
  "Screen type",
  "Screen diagonal",
  "Protection class",
  "Built-in memory",
];

export default function FilterSidebar() {
  const [brands, setBrands] = useState<BrandItem[]>(initialBrands);
  const [brandSearch, setBrandSearch] = useState("");
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({ Brand: true });

  const toggleBrand = (name: string) => {
    setBrands(prev => prev.map(b => b.name === name ? { ...b, checked: !b.checked } : b));
  };

  const toggleSection = (label: string) => {
    setOpenSections(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const visibleBrands = brands.filter(b =>
    b.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col gap-6">
      {/* Brand Section */}
      <div className="flex flex-col">
        <button
          onClick={() => toggleSection("Brand")}
          className="flex items-center justify-between w-full py-3 border-b border-zinc-300 transition-colors hover:text-zinc-600"
        >
          <span className="text-lg font-medium tracking-wide">Brand</span>
          {openSections["Brand"] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {openSections["Brand"] && (
          <div className="flex flex-col gap-4 pt-4">
            {/* Search Input */}
            <div className="relative flex items-center bg-zinc-100 rounded-lg px-3 py-2">
              <Search size={18} className="text-zinc-400 mr-2" />
              <input
                value={brandSearch}
                onChange={e => setBrandSearch(e.target.value)}
                placeholder="Search"
                className="bg-transparent outline-none text-sm w-full placeholder:text-zinc-400"
              />
            </div>

            {/* Brand List */}
            <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
              {visibleBrands.map(brand => (
                <div
                  key={brand.name}
                  onClick={() => toggleBrand(brand.name)}
                  className="flex items-center gap-2 cursor-pointer group py-1"
                >
                  {brand.checked ? (
                    <CheckSquare size={18} className="text-black" />
                  ) : (
                    <Square size={18} className="text-zinc-300 group-hover:text-zinc-400" />
                  )}
                  <span className="text-[15px] font-medium text-black">
                    {brand.name}{" "}
                    <span className="font-normal text-xs text-zinc-400 ml-1">
                      {brand.count}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Collapsible Sections */}
      {collapsibleFilters.map(label => (
        <div key={label} className="flex flex-col">
          <button
            onClick={() => toggleSection(label)}
            className="flex items-center justify-between w-full py-3 border-b border-zinc-300 transition-colors hover:text-zinc-600"
          >
            <span className="text-lg font-medium tracking-wide text-left">{label}</span>
            {openSections[label] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          {openSections[label] && (
            <div className="py-4 text-zinc-400 text-sm italic">
              Filter options for {label} coming soon...
            </div>
          )}
        </div>
      ))}
    </aside>
  );
}
