/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['yt3.googleusercontent.com', 'i.ytimg.com', 'img.clerk.com', 'picsum.photos'],
    },
}

module.exports = nextConfig
