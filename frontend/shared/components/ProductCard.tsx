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
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(price);

  return (
    <div className="p-5 bg-zinc-800 rounded-xl">
      <Image
        src={image}
        alt={title}
        width={200}
        height={100}
        className="w-full h-64"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{formattedPrice}</p>
      <p>{rating}</p>
      <Star />
    </div>
  );
}
