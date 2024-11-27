const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      os: false,
    };
    return config;
  },
  images: {
    unoptimized: true,
  },
  output: "export", // Ensures static export
  distDir: "out", // Static files go here
  reactStrictMode: true,
};

module.exports = nextConfig;
