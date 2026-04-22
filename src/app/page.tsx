import Hero from "@/components/ui/home/Hero";
import Category from "@/components/ui/home/Category";
import ProductLists from "@/components/ui/home/ProductLists";
import Banner from "@/components/ui/home/Banner";
import DiscountProducts from "@/components/ui/home/DiscountProducts";
import SummerSaleBanner from "@/components/ui/home/SummerSaleBanner";

// app/page.tsx
// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function HomePage() {
  // await sleep(10000);

  return (
    <div className="">
      <main className="">
        <div className="bg-zinc-900 text-zinc-400 py-1.5 overflow-hidden whitespace-nowrap border-b border-zinc-800 text-[11px] uppercase tracking-[0.2em] font-medium">
          <div className="animate-move">
            <span className="text-red-500 mx-2">●</span> PREVIEW MODE | ACTIVE
            DEVELOPMENT — FEATURES MAY BE LIMITED 
            <span className="text-red-500 mx-2">●</span> PREVIEW MODE | ACTIVE
            DEVELOPMENT — FEATURES MAY BE LIMITED 
            <span className="text-red-500 mx-2">●</span> PREVIEW MODE | ACTIVE
            DEVELOPMENT — FEATURES MAY BE LIMITED 

          
          </div>
        </div>
        <Hero />
        <Category />
        <ProductLists />
        <Banner />
        <DiscountProducts />
        <SummerSaleBanner />
      </main>
    </div>
  );
}
