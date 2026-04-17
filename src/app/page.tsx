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
