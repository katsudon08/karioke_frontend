/** @type {import('next').NextConfig} */
const rewrites = process.env.NODE_ENV === 'development' ? [
    {
        source: '/:path*',
        destination: 'http://localhost:8000/:path*'
    }
] : []

const nextConfig = {
    reactStrictMode: true,
    // 全ての API routes にマッチ
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
                    { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
                ],
            },
        ]
    },
    async rewrites() {
        return rewrites
    }
}

module.exports = nextConfig
