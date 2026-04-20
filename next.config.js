const path = require('path');

const nextConfig = {
  reactStrictMode: false,
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
  }
};

module.exports = nextConfig;
