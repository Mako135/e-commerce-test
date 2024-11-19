import { create } from "zustand";
import { Product } from "./types";

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  filterProductsByTitle: (title: string) => void;
  filterProductsByStars: (stars: number) => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  setProducts: (products: Product[]) =>
    set((state) => {
      if (state.products !== products) {
        return { products };
      }
      return state;
    }),

  filterProductsByTitle: (title: string) =>
    set((state) => ({
      products: state.products.filter((product) => product.title === title),
    })),

  filterProductsByStars: (stars: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.rating >= stars),
    })),
}));

