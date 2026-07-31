"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink"; 
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // লগআউটের পর লগইন পেজে পাঠাবে
          router.refresh();
        },
      },
    });
  };

  return (
    <nav className="bg-[#1e40af] text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide flex items-center gap-2">
          🎓 <span className="hover:text-gray-200 transition">SkillSphere</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/courses">Courses</NavLink>
          <NavLink href="/my-profile">My Profile</NavLink>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          {session ? (
            <div className="flex items-center gap-3">
              {session.user?.image ? (
                <img
                  src={session.user.image}
                  alt="User Avatar"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center font-bold text-white">
                  {session.user?.name?.charAt(0) || "U"}
                </div>
              )}
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded text-sm font-semibold transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-[#2563eb] hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm font-semibold transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#10b981] hover:bg-emerald-600 text-white px-4 py-1.5 rounded text-sm font-semibold transition"
              >
                Register
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}