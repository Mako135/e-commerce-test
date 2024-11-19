import { create } from "zustand";
import { Product } from "./types";

interface Filters {
  title: string;
  stars: number;
}

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  filters: Filters;
  setProducts: (products: Product[]) => void;
  filterProductsByTitle: (title: string) => void;
  filterProductsByStars: (stars: number) => void;
  resetFilters: () => void;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  filteredProducts: [],
  filters: {
    title: "",
    stars: 0,
  },

  setProducts: (products: Product[]) =>
    set(() => ({
      products,
      filteredProducts: products,
      filters: { title: "", stars: 0 },
    })),

  filterProductsByTitle: (title: string) =>
    set((state: ProductState) => {
      const newFilters = { ...state.filters, title };
      const filtered = applyFilters(state.products, newFilters);
      return { filters: newFilters, filteredProducts: filtered };
    }),

  filterProductsByStars: (stars: number) =>
    set((state) => {
      const newFilters = { ...state.filters, stars };
      const filtered = applyFilters(state.products, newFilters);
      return { filters: newFilters, filteredProducts: filtered };
    }),

  resetFilters: () =>
    set((state) => ({
      filteredProducts: state.products,
      filters: { title: "", stars: 0 },
    })),
}));

function applyFilters(products: Product[], filters: Filters): Product[] {
  return products.filter((product) => {
    const matchesTitle = product.title
      .toLowerCase()
      .includes(filters.title.toLowerCase());
    const matchesStars = product.rating >= filters.stars;
    return matchesTitle && matchesStars;
  });
}
