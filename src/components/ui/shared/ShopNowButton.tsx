"use client";
import { Button } from "@/components/ui/button";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ShopNowBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function ShopNowBtn({ children, className = "", ...props }: ShopNowBtnProps) {
  return (
    <Button
      onClick={() => console.log("Shop now clicked")}
      className={`border-accent-border bg-transparent w-48 p-7 mt-6 cursor-pointer hover:bg-gray-500 hover:text-white ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
