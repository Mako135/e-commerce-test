import ProductList from "@/shared/widgets/ProductList";

export default async function Home() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();

  return (
    <div>
      <ProductList products={data} />
    </div>
  );
}
