import {
  Card,
  CardAction,
  CardContent,

} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import CardProduct from "../shared/ProductCard";
import { Heart } from "lucide-react";
import { PRODUCTS_LIST } from "@/data/Icons_Img";
import Image from "next/image";
import BuyNowButton from "../shared/BuyNowButton";
export default function NewProductArrival() {
  return (
    <div>
      <main className="">
        <div className=" ">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PRODUCTS_LIST.map((product, index) => (
              <CardProduct key={index} className="flex flex-col h-full">
                <CardContent className="flex flex-col ">
                  <div className="w-full flex flex-col ">
                    <div className=" flex justify-end py-5">
                      <Heart
                        className="cursor-pointer"
                        strokeWidth={1.1}
                        size={30}
                      />
                    </div>
                    <div className="flex justify-center">
                      <Image
                        className="object-contain"
                        src={product.image}
                        alt={product.name}
                        width={160}
                        height={160}
                      />
                    </div>
                    <div className=" text-center pt-6  flex flex-col">
                      <div>
                        <div className="text-hero-sub line-clamp-2  min-h-12">
                          {product.name}
                        </div>
                        {product.price && (
                          <>
                            <p className="text-card-title font-bold pt-2">
                              ${product.price}{" "}
                            </p>

                            <div className="w-full pt-2 mt-auto">
                              <BuyNowButton
                                product={product}
                                className="p-6 w-full cursor-pointer"
                              >
                                <ShoppingCart />
                                Add to cart
                              </BuyNowButton>
                            </div>

                              

                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </CardProduct>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
