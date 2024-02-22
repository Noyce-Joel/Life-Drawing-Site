/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            
            source: '/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: '*',
              },
              {
                key: 'Access-Control-Allow-Methods',
                value: 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
              },
              {
                key: 'Access-Control-Allow-Headers',
                value: 'Content-Type, Authorization',
              },
            ],
          },
        ];
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.evbuc.com',
            port: '',
            
          },
        ],
      },
};

export default nextConfig;
