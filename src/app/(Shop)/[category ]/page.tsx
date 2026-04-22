import { PRODUCTS } from "@/data/Product";
import FilterSidebar from "@/components/ui/shared/FilterSidebar";
import ShopProductCard from "@/components/ui/shared/ShopProductCard";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ [key: string]: string }>;
}) {
  const resolvedParams = await params;

  // Handles potential space in folder name '[category ]'
  const categoryKey = Object.keys(resolvedParams).find(
    (k) => k.trim() === "category",
  );
  const rawCategory = categoryKey ? resolvedParams[categoryKey] : "";
  const category = decodeURIComponent(rawCategory)
    .replace(/^\//, "")
    .toLowerCase();

  const filteredProducts = PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category,
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4">
        <div className="bg-red-50 text-red-600 px-8 py-6 rounded-xl border border-red-100 max-w-md">
          <h2 className="text-2xl font-bold mb-2">No Products Found</h2>
          <p className="text-red-500/80">
            We couldn't find any items in the <strong>"{category}"</strong>{" "}
            category.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[160px] py-6 md:py-[24px]">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Product Grid Area */}
          <div className="flex-1 w-full">
            {/* Header / Sort Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-500 font-medium">
                  Selected Products:
                </span>
                <span className="text-xl font-semibold">
                  {filteredProducts.length}
                </span>
              </div>

              {/* Hardcoded sort for now to match Figma pattern */}
              <div className="relative group">
                <button className="flex items-center justify-between gap-8 bg-white border border-zinc-200 rounded-lg px-4 py-2 min-w-[160px] text-sm font-medium">
                  By rating
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {filteredProducts.map((product) => (
                <ShopProductCard key={product.id} product={product as any} />
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center items-center gap-4 py-8">
              <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((p) => (
                  <button
                    key={p}
                    className={`px-4 py-1.5 rounded-md text-sm font-medium ${
                      p === 1 ? "bg-black text-white" : "bg-zinc-100 text-black"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <span className="px-2 text-zinc-400">....</span>
                <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-zinc-100 text-black">
                  10
                </button>
              </div>
              <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
