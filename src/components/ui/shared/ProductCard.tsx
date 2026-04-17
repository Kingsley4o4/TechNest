import { CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { Heart } from "lucide-react";
import { PRODUCTS_LIST } from "@/data/Icons_Img";
import Image from "next/image";
import AddtoCartBtn from "../shared/AddtoCartBtn";
import { ReactNode, HTMLAttributes } from "react";

interface CardProductProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function CardProduct({
  children,
  className = "",
  ...props
}: CardProductProps) {
  return (
    <div
      {...props}
      className={`w-full h-full py-5 bg-card rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
