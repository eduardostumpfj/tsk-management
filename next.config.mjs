/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,     // Make sure URLs end with a slash (important for GitHub Pages)
    output: 'export',        // Enable static export
    distDir: 'dist',         // Set the directory to 'dist'
    images: {
      unoptimized: true,     // Disable image optimization (optional, but helps for static exports)
    },
  };
  
  export default nextConfig;