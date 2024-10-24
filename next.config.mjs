/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // formats: ['image/avif', 'image/webp', 'image/jpg', 'image/png'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3m4ag9jddgeom.cloudfront.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "prod-artist-wordpress.abs-cbn.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "d25cs70ypmnbt7.cloudfront.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "uat-news-ent-image-api.abs-cbn.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
