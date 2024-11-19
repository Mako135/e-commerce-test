"use client";

import { useCartStore } from "@/lib/cartStore";
import { Product } from "@/lib/types";
import Image from "next/image";
import ProductQuantityControl from "./ProductQuantityControl";

interface CartProductCardProps {
  product: Product;
}

export default function CartProductCard({ product }: CartProductCardProps) {
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore();
  const cartItem = cart[product.id];

  if (!cartItem) return null;

  const totalPrice = product.price * cartItem.quantity;
  const formattedPrice = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: product.currency,
  }).format(totalPrice);

  return (
    <div className="flex flex-col items-center border-b py-4 md:flex-row">
      <Image
        src={product.image}
        alt={product.title}
        width={100}
        height={100}
        objectFit="cover"
        className="w-full h-[100px] md:w-[200px]"
      />
      <div className="mt-5 flex-1 md:ml-4 md:mt-0">
        <h2 className="text-xl font-bold">{product.title}</h2>
        <p className="text-gray-600 line-clamp-2">{product.description}</p>
        <p className="mt-2 font-bold">{formattedPrice}</p>
      </div>
      <ProductQuantityControl
        quantity={cartItem.quantity}
        onIncrease={() => increaseQuantity(product)}
        onDecrease={() => decreaseQuantity(product)}
      />
    </div>
  );
}
