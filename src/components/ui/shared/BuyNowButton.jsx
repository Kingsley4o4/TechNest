"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useCartStore from "@/features/cart/cartStore";

export default function BuyNowButton({ product, children, className = "", ...props }) {
  const [loading, setLoading] = useState(false);
  // const [quantity, setQuantity] = useState(0);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const cartItem = useCartStore((state) => 
    state.cartItems.find((item) => item.id === product?.id)
  );
  
  const quantity = cartItem ? cartItem.quantity : 0;

  return quantity > 0 ? (
    <div className="flex items-center gap-2 w-full mb-2">
      <button
        onClick={() => removeFromCart(product.id)}
        className="bg-black text-white rounded-lg w-10 h-10 text-lg hover:bg-gray-800 flex items-center justify-center flex-shrink-0"
      >
        −
      </button>

      <span className="flex-1 text-center text-sm font-medium border border-gray-200 rounded-lg py-2">
        {quantity}
      </span>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white rounded-lg w-10 h-10 text-lg hover:bg-gray-800 flex items-center justify-center flex-shrink-0"
      >
        +
      </button>
      
    </div>
  ) : (
    <Button
      onClick={() => addToCart(product)}
      className={`${className}  text-white hover:bg-black hover:text-white`}
      {...props}
    >
      {children}
    </Button>
  );
}
