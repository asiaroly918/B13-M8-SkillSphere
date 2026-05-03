"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
    <nav className="fixed w-full transition-all duration-200 h-[12vh] z-[1000] bg-blue-700">
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        
        {/* Logo */}
        <Image
        src="/images/logo.png"
        alt="Logo"
        width={120}
        height={120}
        priority
    />

        {/* Menu */}
        <ul className="flex items-center gap-5 text-sm">
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/courses">Courses</Link>
        </li>
        <li>
            <Link href="/my profile">My Profile</Link>
        </li>
        </ul>

        {/* Auth */}
        <ul className="flex items-center gap-4 text-sm">
        <li>
            <Link href="/logout">Logout</Link>
        </li>
        <li>
            <Link href="/login">Login</Link>
        </li>
        </ul>

    </div>
    </nav>
    );
};

export default Navbar;