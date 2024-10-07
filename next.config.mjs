/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        pathname: "/**", // or specify a specific pathname if needed
      },
    ],
  },
};

export default nextConfig;
