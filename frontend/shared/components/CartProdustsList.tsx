"use client";

import { useCartStore } from "@/lib/cartStore";
import ProductCard from "./ProductCard";
import { Product } from "@/lib/types";

export default function CartProdustsList() {
  const { cart } = useCartStore();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-20 max-w-screen-2xl mx-5 2xl:mx-auto">
      {cart.map((product: Product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
