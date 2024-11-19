import { Product } from "@/lib/types";
import Image from "next/image";
import { Star } from "lucide-react";
import AddToCartBtn from "./AddToCartBtn";

export default function ProductCard(product: Product) {
  const { title, description, image, currency, rating, price } = product;
  const filledStars = Math.round(rating);
  const formattedPrice = new Intl.NumberFormat("ru-RU", {
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
        className="w-full h-64 object-cover"
      />
      <div className="bg-slate-300 p-5 -translate-y-2 rounded-xl">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="line-clamp-2">{description}</p>
        <div className="grid grid-cols-2 my-5">
          <div>
            <p className="text-xs font-bold tracking-wider">ЦЕНА</p>
            <b className="text-xl">{formattedPrice}</b>
          </div>

          <div>
            <p className="text-xs font-bold tracking-wider">РЕЙТИНГ</p>
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
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
}
