"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-medium transition duration-200 ${
        isActive
          ? "text-emerald-400 font-bold border-b-2 border-emerald-400 pb-1"
          : "text-gray-200 hover:text-emerald-400"
      } ${className}`}
    >
      {children}
    </Link>
  );
}