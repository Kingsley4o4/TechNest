"use client";
import { Heart, ShoppingCart, User, Search, MenuIcon } from "lucide-react";
import useCartStore from "@/features/cart/cartStore";
import CartDrawer from "@/components/ui/shared/CartDrawer";

export default function NavBar() {
  const cartItems = useCartStore((state) => state.cartItems);

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <div className="w-full">
      <main className="flex items-center justify-between lg:justify-center gap-4 md:gap-8 lg:gap-20 max-w-full px-4 md:px-10 lg:px-20 py-2">
        <h1 className="text-hero-label font-bold">Cyber</h1>

        <span className="md:hidden">
          <MenuIcon className="w-5 h-5" />
        </span>

        <div className="relative hidden md:flex lg:mx-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="search"
            className="p-3 pl-10 w-48 lg:w-64 rounded outline-0 bg-secondary text-accent-foreground placeholder:text-muted-foreground"
            placeholder="Search"
          />
        </div>

        <ul className="hidden md:flex items-center gap-8 text-hero-sub text-muted-foreground cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>ContactUs</li>
          <li>Blog</li>
        </ul>

        <div className="hidden md:flex items-center gap-5 text-black cursor-pointer">
          <Heart className="w-5 h-5" />

          <div className="relative flex items-center">
            <CartDrawer>
              <div>
              <ShoppingCart
                className="w-5 h-5
            "
              />

                {totalCartItems > 0 && (
                  <span className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {totalCartItems}
                  </span>
                )}
              
              </div>
            </CartDrawer>
          </div>

          <User className="w-5 h-5 " />
        </div>
      </main>
    </div>
  );
}
