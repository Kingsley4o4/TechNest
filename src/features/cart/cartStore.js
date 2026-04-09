import { create } from "zustand";

const useCartStore = create((set) => ({
  
  cartItems: [],

//     Increment an item


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

    // removeFromCart  Decrement an item

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
}));

export default useCartStore;