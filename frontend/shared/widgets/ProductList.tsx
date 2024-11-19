"use client";

import { Product } from "@/lib/types";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "@/lib/productStore";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { setProducts } = useProductStore();
  setProducts(products);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
