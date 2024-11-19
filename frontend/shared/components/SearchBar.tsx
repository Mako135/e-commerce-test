"use client";

import { Search } from "lucide-react";
import { useProductStore } from "@/lib/productStore";

export default function SearchBar() {
  const { filterProductsByTitle } = useProductStore();

  return (
    <div className="relative mb-10 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full border-b-2 py-2 pl-10"
        onChange={(e) => filterProductsByTitle(e.target.value)}
      />
      <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 focus:outline-none focus:border-0" />
    </div>
  );
}
