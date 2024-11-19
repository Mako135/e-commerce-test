"use client";

import { Product } from "@/lib/types";
import ProductCard from "../components/ProductCard";
import { useProductStore } from "@/lib/productStore";
import { useEffect } from "react";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const { filteredProducts, setProducts } = useProductStore();

  useEffect(() => {
    setProducts(products);
  }, [products, setProducts]);

  if (filteredProducts.length === 0) {
    return <p className="text-center">No products found</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {filteredProducts.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
