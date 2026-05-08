import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="relative mt-24">
    <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

    <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

    <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        
          {/* Brand */}
        <div className="space-y-4">
            <div className="flex items-center gap-2">
            <Image
                src="https://b13-m8-skill-sphere.vercel.app/images/logo.png"
                alt="Logo"
                width={120}
                height={120}
                priority
                />
            <h2 className="text-xl font-semibold">SkillSphere</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
            Creating an online learning platform is a smart and powerful idea in today’s digital world. 
            People now prefer to learn from home, at their own pace, using the internet.
            </p>
        </div>

          {/* Contact */}
        <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Email: support@skillsphere.com</li>
            <li>Phone: +33 123 456 789</li>
            <li>Location: France</li>
            </ul>
        </div>

          {/* Links */}
        <div>
            <h3 className="text-sm font-semibold mb-4">Social Links</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li><Link href="/privacy policy">Privacy Policy</Link></li>
            <li><Link href="/terms & condition">Terms & Condition</Link></li>
            <li><Link href="/contact info">Contact info</Link></li>
            </ul>
        </div>

          {/* Social */}
        <div className="space-y-4">
            <h3 className="text-sm font-semibold">Follow Us</h3>

            <div className="flex gap-4">
            <Link
                href="#"
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-black hover:text-white transition"
            >
                <FaFacebookF size={16} />
            </Link>

            <Link
                href="#"
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-black hover:text-white transition"
            >
                <FaTwitter size={16} />
            </Link>

            <Link
                href="#"
                className="p-2 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-black hover:text-white transition"
            >
                <FaLinkedinIn size={16} />
            </Link>
            </div>

            <Link
            href="/signup"
            className="inline-flex px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm hover:scale-105 transition"
            >
            Get Started
            </Link>
        </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} SkilSpeher. All rights reserved.</p>
        <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
        </div>
        </div>
    </div>
    </footer>
);
};

export default Footer;