"use client";

import { useCartStore } from "@/lib/cartStore";
import CartProductCard from "../components/CartProductCard";

export default function CartProductsList() {
  const { cart } = useCartStore();
  const cartItems = Object.values(cart);

  return (
    <div className="mx-5 flex flex-col gap-10 max-w-screen-2xl 2xl:mx-auto">
      {cartItems.map((cartItem) => (
        <CartProductCard key={cartItem.product.id} product={cartItem.product} />
      ))}
    </div>
  );
}
