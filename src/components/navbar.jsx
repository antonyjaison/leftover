"use client";

import {
  Home,
  NotebookText,
  LineChart,
  MessageCircleMore,
  History,
  Store,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return path === pathname;
  };

  return (
    <nav className=" fixed bottom-0 w-full">
      <div
        style={{ boxShadow: "  0px -5px 10px 0px rgba(0, 0, 0, 0.15)" }}
        className="flex justify-between items-center bg-white py-6 px-12"
      >
        <Link href="/">
          <Home size={24} color={isActive("/") ? "#224E38" : "#000"} />
        </Link>
        <Link href="/cart">
          <History size={24} color={isActive("/cart") ? "#224E38" : "#000"} />
        </Link>
        <Link href="/store">
          <Store size={24} color={isActive("/store") ? "#224E38" : "#000"} />
        </Link>
        <Link href="/chat">
          <MessageCircleMore
            size={24}
            color={isActive("/chat") ? "#224E38" : "#000"}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
