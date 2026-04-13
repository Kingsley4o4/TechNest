"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useCartStore from "@/features/cart/cartStore";
import Image from "next/image";
import { ReactNode } from "react";

interface CartDrawerProps {
  children: ReactNode;
}

export default function CartDrawer({ children }: CartDrawerProps) {
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <Sheet>
    
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>

      
      <SheetContent className="w-full sm:max-w-md bg-white flex flex-col h-full">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-xl font-bold">Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              Your cart is empty. Start shopping!
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                 
                  <div className="w-20 h-20 relative bg-gray-100 rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  
                  <div className="flex-1">
                    <h4 className="text-sm font-medium line-clamp-1">{item.name}</h4>
                    <p className="text-sm font-bold text-gray-900">${item.price}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

       
        {cartItems.length > 0 && (
          <div className="border-t pt-4 mt-auto">
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span>
                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </span>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
