/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <--- Add this line
  images: {
    unoptimized: true, // Required for static export if using Next <Image />
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;