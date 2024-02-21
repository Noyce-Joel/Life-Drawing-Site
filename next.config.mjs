/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            // Apply these headers to all routes in your application.
            source: '/(.*)',
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: '*', // replace this with your origin
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
};

export default nextConfig;
