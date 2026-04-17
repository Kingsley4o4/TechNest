import { DISCOUNT_PRODUCT } from "@/data/Icons_Img";
import Image from "next/image";
import CardProduct from "../shared/ProductCard";
import { CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export default function DiscountProducts() {
  return (
    <section className="py-12">
      <div className="px-page-x-mobile lg:px-page-x mb-8">
        <h2 className="text-2xl font-medium text-[#2C2C2C]">
          Discounts up to -50%
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 px-page-x-mobile lg:px-page-x mb-14">
        {DISCOUNT_PRODUCT.map((product) => (
          <CardProduct
            key={product.id}
            className="flex flex-col bg-[#F6F6F6] border-none shadow-none rounded-[15px] p-6 relative group"
          >
            <CardContent className="p-0 flex flex-col items-center h-full">
              <div className="absolute top-4 right-4">
                <Heart
                  className="w-6 h-6 text-[#919191] cursor-pointer hover:text-red-500 transition-colors"
                  strokeWidth={1.5}
                />
              </div>

              <div className="w-full aspect-square relative mb-4 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col items-center text-center flex-1">
                <h3 className="text-[15px] font-medium text-black mb-4 line-clamp-2 min-h-10">
                  {product.name}
                </h3>
                <p className="text-2xl font-semibold text-black mb-6">
                  ${product.price}
                </p>
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium text-[14px] hover:bg-[#2C2C2C] transition-colors mt-auto">
                  Buy Now
                </button>
              </div>
            </CardContent>
          </CardProduct>
        ))}
      </div>
    </section>
  );
}
