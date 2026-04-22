"use client";
import { Button } from "@/components/ui/button";
import { ReactNode, ButtonHTMLAttributes } from "react";
import useCartStore from "@/features/cart/cartStore";
import { Product } from "@/types";
import { useState, useEffect } from "react";

interface AddtoCartBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  product: Product;
  children: ReactNode;
  className?: string;
}

export default function AddtoCartBtn({
  product,
  children,
  className = "",
  ...props
}: AddtoCartBtnProps) {
  const [isMounted, setIsMounted] = useState(false);
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const cartItem = useCartStore((state) =>
    state.cartItems.find((item) => item.id === product?.id),
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const quantity = cartItem ? cartItem.quantity : 0;

  const handleRemoveFromCart = () => {
    if (removeFromCart) {
      removeFromCart(product.id);
    }
  };

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart(product);
    }
  };

  if (!isMounted) {
    return (
      <Button
        key="not-mounted"
        className={`${className} text-white hover:bg-black hover:text-white `}
        {...props}
      >
        {children}
      </Button>
    );
  }

  return quantity > 0 ? (
    <div
      key="mounted-quantity"
      className="flex items-center gap-2 w-full mb-2"
    >
      <button
        onClick={handleRemoveFromCart}
        className="bg-black text-white rounded-lg w-10 h-10 text-lg hover:bg-gray-800 flex items-center justify-center"
      >
        −
      </button>

      <span className="flex-1 text-center text-sm font-medium border border-gray-200 rounded-lg py-2">
        {quantity}
      </span>

      <button
        onClick={handleAddToCart}
        className="bg-black text-white rounded-lg w-10 h-10 text-lg hover:bg-gray-800 flex items-center justify-center"
      >
        +
      </button>
    </div>
  ) : (
    <Button
      key="mounted-add"
      onClick={handleAddToCart}
      className={`${className}  text-white hover:bg-black hover:text-white`}
      {...props}
    >
      {children}
    </Button>
  );
}
