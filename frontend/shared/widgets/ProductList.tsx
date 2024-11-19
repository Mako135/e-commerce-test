import { Product } from "@/lib/types";
import ProductCard from "../components/ProductCard";

export default async function ProductList() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();

  return (
    <div className="grid grid-cols-4 gap-5 my-40">
      {data.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
