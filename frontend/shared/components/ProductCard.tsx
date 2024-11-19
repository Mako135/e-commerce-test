import { Product } from "@/lib/types";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductCard({
  title,
  description,
  image,
  currency,
  rating,
  price,
}: Product) {
  const filledStars = Math.round(rating);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(price);

  return (
    <div className="rounded-xl overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={200}
        height={100}
        className="w-full h-64"
      />
      <div className="bg-slate-100 p-5 -translate-y-2 rounded-xl">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="line-clamp-2">{description}</p>
        <div className="grid grid-cols-2 my-5">
          <div>
            <p className="text-xs font-bold tracking-wider">PRICE</p>
            <b className="text-xl">{formattedPrice}</b>
          </div>

          <div>
            <p className="text-xs font-bold tracking-wider">RATING</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={`${
                    i < filledStars ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill={i < filledStars ? "currentColor" : "none"}
                />
              ))}
            </div>
          </div>
        </div>
        <button className="bg-black w-full py-2 rounded-md text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
}
