/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // If running locally, make sure the server is hosted inside /out folder
}

module.exports = nextConfig
