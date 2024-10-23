/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["tailwindui.com", "nextjs.org", "images.unsplash.com"],
    dangerouslyAllowSVG: true, // Enable SVG images
  },
};

export default nextConfig;
