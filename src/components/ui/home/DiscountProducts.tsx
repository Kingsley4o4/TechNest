"use client";

import { DISCOUNT_PRODUCT } from "@/data/Icons_Img";
import Image from "next/image";
import CardProduct from "../shared/ProductCard";
import { CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import AddtoCartBtn from "../shared/AddtoCartBtn";
import useCartStore from "@/features/cart/cartStore";

export default function DiscountProducts() {
  const wishlist = useCartStore((state) => state.wishlist);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);

  return (
    <section className="py-12 px-page-x-mobile lg:px-page-x">
      <div className="px-page-x-mobile  mb-8">
        <h2 className="text-2xl font-medium text-[#2C2C2C] text-start">
          Discounts up to -50%
        </h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4  mb-14">
        {DISCOUNT_PRODUCT.map((product) => {
          const isLiked = wishlist.includes(product.id);
          return (
            <CardProduct
              key={product.id}
              className="group flex flex-col h-full bg-[#f6f6f6] border-none rounded-[9px] hover:shadow-lg transition-all duration-300 p-0"
            >
              <CardContent className="flex flex-col h-full p-6">
                <div className="flex justify-end w-full cursor-pointer py-5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className="hover:scale-110 transition-transform"
                  >
                    <Heart
                      className={`transition-colors ${
                        isLiked ? "fill-red-500 text-red-500" : "text-[#919191]"
                      }`}
                      strokeWidth={1.5}
                      size={30}
                    />
                  </button>
                </div>

                <div className="flex justify-center relative overflow-hidden h-40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={160}
                    height={160}
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col items-center text-center flex-1 pt-6">
                  <h1 className="text-hero-sub line-clamp-2  min-h-12 text-black font-medium">
                    {product.name}
                  </h1>
                  <p className="text-2xl font-semibold text-black tracking-tight mb-6">
                    ${product.price}
                  </p>
                  <AddtoCartBtn
                    className="p-6 cursor-pointer"
                    product={product}
                  >
                    Buy Now
                  </AddtoCartBtn>
                </div>
              </CardContent>
            </CardProduct>
          );
        })}
      </div>
    </section>
  );
}
