"use client";

import { useCartStore } from "@/lib/cartStore";
import { Product } from "@/lib/types";
import ProductQuantityControl from "./ProductQuantityControl";

interface AddToCartBtnProps {
  product: Product;
}

export default function AddToCartBtn({ product }: AddToCartBtnProps) {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } =
    useCartStore();
  const cartItem = cart[product.id];

  return (
    <div>
      {cartItem ? (
        <ProductQuantityControl
          quantity={cartItem.quantity}
          onIncrease={() => increaseQuantity(product)}
          onDecrease={() => decreaseQuantity(product)}
        />
      ) : (
        <button
          onClick={() => addToCart(product)}
          className="bg-black w-full py-2 rounded-md text-white"
        >
          Добавить в корзину
        </button>
      )}
    </div>
  );
}
