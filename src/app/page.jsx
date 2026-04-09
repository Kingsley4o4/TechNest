import Hero from "@/components/ui/home/Hero";
import Category from "@/components/ui/home/Category";
import ProductLists from "@/components/ui/home/ProductLists";
 
// app/page.jsx
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default  async function HomePage() {

    await sleep(10000);


  return (
    <div className="">
      <main className="">
        <Hero />
        <Category />
        <ProductLists />
      </main>
    </div>
  );
}
