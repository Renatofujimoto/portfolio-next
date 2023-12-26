/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pixner.net",
                port: "",
                pathname: "/aikeu/**",
            },
        ],
    },
}
