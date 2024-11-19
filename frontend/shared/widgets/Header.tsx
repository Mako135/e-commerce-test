import { ShoppingCart } from "lucide-react";
import Cart from "../components/Cart";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky z-20 py-5 px-10 top-0 max-w-screen-2xl mx-auto bg-black backdrop-blur-lg bg-opacity-50 flex justify-between items-center rounded-b-xl text-white">
      <Link href="/">
        <h1 className="text-xl font-bold">E-COOMERCE</h1>
      </Link>
      <div className="flex justify-between items-center gap-5">
        <Cart />
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}
