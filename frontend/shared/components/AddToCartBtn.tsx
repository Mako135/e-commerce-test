"use client";

import { useCartStore } from "@/lib/cartStore";
import { Product } from "@/lib/types";

interface AddToCartBtnProps {
  product: Product;
}

export default function AddToCartBtn({ product }: AddToCartBtnProps) {
  const { addToCart } = useCartStore();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-black w-full py-2 rounded-md text-white"
    >
      Add to Cart
    </button>
  );
}
