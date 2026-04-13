import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product, CartItem } from "@/types";

interface CartState {
  cartItems: CartItem[];
}

interface CartActions {
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string | number) => void;
}

type CartStore = CartState & CartActions;

const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item.id === product.id);

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
        }),

      removeFromCart: (productId) =>
        set((state) => {
          const existingItem = state.cartItems.find((item) => item.id === productId);

          if (existingItem?.quantity === 1) {
            return {
              cartItems: state.cartItems.filter((item) => item.id !== productId),
            };
          }

          return {
            cartItems: state.cartItems.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }),
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
