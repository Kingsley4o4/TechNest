// components/sections/Banner.tsx
import Image from "next/image";
import { PRODUCTS_LIST } from "@/data/Icons_Img";
import ShopNowBtn from "../shared/ShopNowButton";

export default function Banner() {
  const bgColor = ["bg-white", "bg-[#F9F9F9]", "bg-[#EAEAEA]", "bg-[#2C2C2C]"];

  const bannerText = [
    "Popular Products",
    "Ipad Pro.",
    "Samsung Galaxy ",
    "Macbook Pro.",
  ];
  return (
    <div className="mt-20">
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {PRODUCTS_LIST.slice(1, 5).map((banner, index) => (
            <div
              key={banner.id || index}
              className={`${bgColor[index]} p-4 flex items-center  lg:h-160 flex-col mt-20 px-6`}
            >
              <Image
                src={banner.image}
                alt={banner.name}
                width={220}
                height={220}
              />
              <div className="mt-15 px-2">
                 <h1 className={index === bgColor.length - 1 ? "text-section-title  font-extralight text-white" : "text-section-title  font-extralight"}>
                {bannerText[index]}
              </h1>
              <p className=" text-accent-border">
                {banner.description || ""} iPad combines a magnificent 10.2-inch
                Retina display, incredible performance, multitasking and ease of
                use.
              </p>
              <ShopNowBtn
                className={
                  index === bgColor.length - 1 ? "text-white" : "text-black"
                }
              >
                Shop Now
              </ShopNowBtn>
              </div>
             
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
