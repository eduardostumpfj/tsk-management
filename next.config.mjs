/** @type {import('next').NextConfig} */
const nextConfig = {
    exportTrailingSlash: true,
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
