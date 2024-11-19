import { create } from "zustand";
import { Product } from "./types";

interface CartState {
  cart: Product[];
  totalProducts: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  totalProducts: 0,
  totalPrice: 0,

  addToCart: (product: Product) =>
    set((state) => ({
      cart: [...state.cart, product],
      totalProducts: state.totalProducts + 1,
      totalPrice: state.totalPrice + product.price,
    })),

  removeFromCart: (product: Product) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== product.id),
      totalProducts: state.totalProducts - 1,
      totalPrice: state.totalPrice - product.price,
    })),
}));
