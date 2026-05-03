import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

const Banner = () => {
    return (
        <div className="w-full min-h-screen bg-[#2d2755] flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div className="text-white">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Best online <br /> platform for <br /> education.
        </h1>

        <p className="text-gray-300 mb-8 max-w-md">
            Learning is the key to growth and success. In today’s digital world, 
            anyone can build skills, explore new opportunities, and improve their future through consistent 
            practice and smart learning. Stay curious, keep learning, and turn knowledge into real success.
        </p>

        <div className="flex gap-4">
            <Link href="#">
            <Button className="bg-green-600 text-white px-6 py-3 rounded-lg">
                Get Started
            </Button>
            </Link>

            <Link href="#">
            <Button className="bg-orange-500 text-white px-6 py-3 rounded-lg">
                Learn More
            </Button>
            </Link>
        </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
        <div className="absolute w-[350px] h-[350px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl opacity-30"></div>

        <Image
            src="/images/hero.png"
            alt="hero"
            width={400}
            height={400}
            className="relative z-10"
        />
        </div>

        </div>
    </div>
    );
};

export default Banner;
