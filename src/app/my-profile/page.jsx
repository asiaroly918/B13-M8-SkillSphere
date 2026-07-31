"use client";

import { useSession, signOut } from "@/lib/auth-client"; // Better Auth client hook
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyProfilePage() {
  const router = useRouter();
  const { data: session, isPending, error } = useSession();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 font-medium">Loading profile...</p>
      </div>
    );
  }

  // ইউজার লগইন না থাকলে লগইন পেজে পাঠানোর রিডাইরেক্ট বা মেসেজ
  if (!session) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
        <p className="text-gray-600 mb-4">Please log in to view your profile.</p>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 border-b pb-6">
          <img
            src={user?.image || "https://avatar.iran.liara.run/public"}
            alt={user?.name || "User Avatar"}
            className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
          />
          <div className="text-center sm:text-left flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{user?.name || "Student Name"}</h1>
            <p className="text-gray-500 text-sm mt-1">{user?.email}</p>
            <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium mt-2">
              Active Student
            </span>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Sign Out
          </button>
        </div>

        {/* Profile Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Enrolled Courses
            </h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">03</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Account Created
            </h3>
            <p className="text-base font-semibold text-gray-800 mt-2">
              {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}