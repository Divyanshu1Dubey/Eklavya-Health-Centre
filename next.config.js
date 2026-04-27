const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: path.join(__dirname),
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'legacy-js-api']
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid flaky packfile cache rename/stat errors on Windows dev sessions.
      config.cache = {
        type: 'memory'
      };
    }

    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
