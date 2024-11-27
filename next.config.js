const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false, // add other Node.js modules as needed
      os: false,
    };
    return config;
  },
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/guest-book-examples" : "",
  output: "export",
  distDir: "build",
  reactStrictMode: true,
};

module.exports = nextConfig;

