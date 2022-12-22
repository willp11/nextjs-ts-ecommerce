/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["api-jewelry.williampage.me"],
        formats: ["image/webp"],
    }
}

module.exports = nextConfig
