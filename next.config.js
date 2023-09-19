/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/recent-projects",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/hire-me",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
