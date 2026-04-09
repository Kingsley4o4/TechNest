"use client";
import { Button } from "@/components/ui/button";

export default function ShopNowBtn({children,  className="" , ...props}) {
  return (
    <Button onClick={() => console.log("Shop now clicked")}
      className={`border-accent-border bg-transparent w-48 p-7 mt-6 cursor-pointer hover:bg-gray-500 hover:text-white ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
