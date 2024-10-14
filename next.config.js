// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.STATIC_EXPORT === "true") {
  nextConfig.output = "export";
}

module.exports = nextConfig;
