"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-12 pb-6 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Col 1: Brand Info */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
            🎓 SkillSphere
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed">
            Empowering learners worldwide with modern skill-based courses in Web Development, Design, Marketing, and more.
          </p>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-green-400 transition">Home</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-green-400 transition">All Courses</Link>
            </li>
            <li>
              <Link href="/my-profile" className="hover:text-green-400 transition">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Legal Links */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Legal
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="#" className="hover:text-green-400 transition">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-green-400 transition">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Info & Social Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
            Contact Us
          </h4>
          <p className="text-xs text-gray-400">📧 support@skillsphere.com</p>
          <p className="text-xs text-gray-400">📞 +880 1234 567 890</p>
          <p className="text-xs text-gray-400">📍 Dhaka, Bangladesh</p>

          <div className="flex space-x-4 pt-2">
            <a href="#" className="text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}