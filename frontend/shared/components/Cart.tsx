"use client";

import { useCartStore } from "@/lib/cartStore";
import React from "react";

export default function Cart() {
  const { totalProducts, totalPrice } = useCartStore();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice);
  return (
    <div className="flex justify-between items-center gap-5">
      <p>
        Total items:{" "}
        <span className="text-green-500 font-bold">{totalProducts}</span>
      </p>
      <p>
        Total price:{" "}
        <span className="text-green-500 font-bold">{formattedPrice}</span>
      </p>
    </div>
  );
}
