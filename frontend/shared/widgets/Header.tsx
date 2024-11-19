import { ShoppingCart } from "lucide-react";
import CartTotal from "../components/CartTotal";
import Link from "next/link";

export default function Header() {
  return (
    <div className="sticky z-20 py-5 px-10 top-0 max-w-screen-2xl mx-auto bg-black backdrop-blur-lg bg-opacity-50 flex justify-between items-center rounded-b-xl text-white">
      <Link href="/">
        <h1 className="md:text-xl font-bold">E-COOMERCE</h1>
      </Link>
      <div className="flex justify-between items-center gap-2 md:gap-5">
        <CartTotal />
        <Link href="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  );
}
