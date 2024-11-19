"use client";

import { ChangeEvent } from "react";
import { useProductStore } from "@/lib/productStore";
import Divider from "../components/Divider";

export default function Filter() {
  const { filterProductsByStars, resetFilters } = useProductStore();

  const handleStarFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const stars = parseInt(e.target.value, 10);
    filterProductsByStars(stars);
  };

  return (
    <div className="min-w-48">
      <h2>Filter</h2>
      <Divider />
      <div>
        <h3>Filter by rating</h3>
        <div>
          {[1, 2, 3, 4].map((star) => (
            <div key={star} className="flex items-center gap-1">
              <input
                type="radio"
                id={`stars-${star}`}
                name="stars"
                value={star}
                onChange={handleStarFilterChange}
              />
              <label htmlFor={`stars-${star}`}>{`${star} star${
                star > 1 ? "s" : ""
              } and more`}</label>
            </div>
          ))}
        </div>
        <button
          onClick={resetFilters}
          className="mt-4 bg-gray-200 px-4 py-2 rounded"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
