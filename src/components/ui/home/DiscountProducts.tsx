import { DISCOUNT_PRODUCT } from "@/data/Icons_Img";
import Image from "next/image";

export default function DiscountProducts() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 px-page-x-mobile lg:px-page-x">Discount Products</h2>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-4 px-page-x-mobile lg:px-page-x">
        {DISCOUNT_PRODUCT.map((discount, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border rounded-lg"
          >
            <Image
              className="object-contain mb-2"
              src={discount.image}
              alt={discount.name}
              width={200}
              height={200}
            />
            <h3 className="text-lg font-semibold">{discount.name}</h3>
            <p className="text-red-500 font-bold">${discount.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
