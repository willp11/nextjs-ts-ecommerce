/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['http://api-jewelry.williampage.me']
    }
}

module.exports = nextConfig
