const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: ['import', 'global-builtin', 'mixed-decls', 'color-functions']
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
