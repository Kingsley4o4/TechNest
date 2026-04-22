import { CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import CardProduct from "../shared/ProductCard";
import { Heart } from "lucide-react";
import { PRODUCTS_LIST } from "@/data/Icons_Img";
import Image from "next/image";
import AddtoCartBtn from "../shared/AddtoCartBtn";
import useCartStore from "@/features/cart/cartStore";

export default function NewProductArrival() {
  const wishlist = useCartStore((state) => state.wishlist);
  const toggleWishlist = useCartStore((state) => state.toggleWishlist);

  return (
    <div>
      <main className="">
        <div className=" ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCTS_LIST.map((product, index) => {
              const isLiked = wishlist.includes(product.id);
              return (
                <CardProduct
                  key={index}
                  className="group flex flex-col h-full bg-[#f6f6f6] border-none rounded-[9px] hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="flex flex-col h-full p-6">
                    <div className="w-full flex flex-col ">
                      <div className=" flex justify-end py-5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(product.id);
                          }}
                          className="hover:scale-110 transition-transform"
                        >
                          <Heart
                            className={`cursor-pointer transition-colors ${
                              isLiked
                                ? "fill-red-500 text-red-500"
                                : "text-[#919191]"
                            }`}
                            strokeWidth={1.5}
                            size={30}
                          />
                        </button>
                      </div>
                      <div className="flex justify-center relative overflow-hidden h-40">
                        <Image
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                          src={product.image}
                          alt={product.name}
                          width={160}
                          height={160}
                        />
                      </div>
                      <div className=" text-center pt-6 flex flex-col flex-grow">
                        <div>
                          <div className="text-hero-sub line-clamp-2 font-medium text-black min-h-12">
                            {product.name}
                          </div>
                          {product.price && (
                            <>
                              <p className="text-2xl font-semibold pt-2 text-black tracking-tight">
                                ${product.price}{" "}
                              </p>
                              <div className="w-full pt-2 mt-auto flex justify-center">
                                <AddtoCartBtn
                                  product={product}
                                  className="p-6 cursor-pointer"
                                >
                                  <ShoppingCart />
                                  Add to cart
                                </AddtoCartBtn>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CardProduct>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
