/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "media.themoviedb.org",
      },
    ],
  },
  allowedDevOrigins: [
    "192.168.1.4",
    "192.168.1.3",
  ],
};

export default nextConfig;
