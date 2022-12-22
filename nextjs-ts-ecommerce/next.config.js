/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['https://api-jewelry.williampage.me']
    }
}

module.exports = nextConfig
