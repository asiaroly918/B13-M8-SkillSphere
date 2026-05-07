"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const Navbar = () => {
    const isLoggedIn = false; 
    return (
    <nav className="w-full h-[12vh] bg-blue-700 fixed z-50">
        
    <div className="w-[90%] xl:w-[80%] mx-auto flex items-center justify-between h-full">

    {/*Logo */}
        <div>
        <Image
            src="/images/logo.png"
            alt="SkillSphere Logo"
            width={110}
            height={110}
            priority
        />
        </div>

        {/*NavLinks */}
        <ul className="flex items-center gap-6 text-white text-sm">
        <li>
            <Link href="/">Home</Link>
        </li>
        <li>
            <Link href="/courses">Courses</Link>
        </li>
        <li>
            <Link href="/my-profile">My Profile</Link>
        </li>
        </ul>

        {/*(Auth)*/}
        <div className="flex items-center gap-4">

        {isLoggedIn ? (
            <>
            {/* Avatar */}
            <Image
            src="/image/user.png"
            alt="User Avatar"
            width={45}
            height={45}
        />


              {/* Logout Button */}
            <button className="bg-red-500 px-3 py-1 rounded text-white">
                Logout
            </button>
            </>
        ) : (
            <>
              {/* Login */}
            <Link href="/login">
                <button className="bg-purple-500 px-3 py-1 rounded text-white">
                Login
                </button>
            </Link>

              {/* Register */}
            <Link href="/register">
                <button className="bg-green-500 px-3 py-1 rounded text-white">
                Register
                </button>
            </Link>
            </>
        )}

        </div>

    </div>
    </nav>
    );
};

export default Navbar;