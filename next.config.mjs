/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmbd.org',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
