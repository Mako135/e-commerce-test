import ProductList from "@/shared/widgets/ProductList";
import Filter from "@/shared/widgets/Filter";
import SearchBar from "@/shared/components/SearchBar";

export default async function Home() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();

  return (
    <div>
      <main className="mt-20 flex max-w-screen-2xl mx-5 2xl:mx-auto gap-5 flex-col md:flex-row">
        <aside>
          <Filter />
        </aside>
        <section className="w-full">
          <SearchBar />
          <ProductList products={data} />
        </section>
      </main>
    </div>
  );
}
