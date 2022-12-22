/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["api-jewelry.williampage.me"],
        formats: ["image/webp", "image/jpeg", "image/png"],
    }
}

module.exports = nextConfig
