"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import AddtoCartBtn from "./AddtoCartBtn";
import CardProduct from "./ProductCard";
import { CardContent } from "@/components/ui/card";
import useCartStore from "@/features/cart/cartStore";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ShopProductCard({ product }: { product: Product }) {
  const [isMounted, setIsMounted] = useState(false);
  const wishlist = useCartStore((state) => state.wishlist);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);

  const isLiked = wishlist.includes(product.id);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <CardProduct className="group h-full flex flex-col bg-[#f6f6f6] border-none rounded-[9px]">
        <CardContent className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-4 h-8" />
          <div className="flex justify-center mb-6 h-40 relative">
            <Image
              src={product.image}
              alt={product.name}
              width={160}
              height={160}
              className="object-contain"
            />
          </div>
          <div className="text-center flex flex-col flex-grow gap-4">
            <h3 className="text-base font-medium text-black line-clamp-2 min-h-[3rem]">
              {product.name}
            </h3>
            <p className="text-2xl font-semibold text-black tracking-tight">
              ${product.price.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </CardProduct>
    );
  }

  return (
    <CardProduct className="group h-full flex flex-col bg-[#f6f6f6] border-none rounded-[9px] hover:shadow-lg transition-all duration-300">
      <CardContent className="flex flex-col h-full p-6">
        {/* Wishlist Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            className="p-1 hover:scale-110 transition-transform"
          >
            <Heart
              size={24}
              className={
                isLiked ? "fill-red-500 text-red-500" : "text-zinc-300"
              }
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Product Image */}
        <div className="flex justify-center mb-6 h-40 relative">
          <Image
            src={product.image}
            alt={product.name}
            width={160}
            height={160}
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="text-center flex flex-col flex-grow gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-medium text-black line-clamp-2 min-h-[3rem]">
              {product.name}
            </h3>
            <p className="text-2xl font-semibold text-black tracking-tight">
              ${product.price.toLocaleString()}
            </p>
          </div>

          {/* Buy Button using existing AddtoCartBtn */}
          <div className="mt-auto">
            <AddtoCartBtn
              product={product as any}
              className="p-6 cursor-pointer"
            >
              Buy Now
            </AddtoCartBtn>
          </div>
        </div>
      </CardContent>
    </CardProduct>
  );
}
