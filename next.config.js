/** @type {import('next').NextConfig} */
const oneYearInSeconds = 31536000;
const oneYearFromNow = new Date(Date.now() + oneYearInSeconds * 1000).toUTCString();

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: oneYearInSeconds,
  },
  async headers() {
    const longLivedAssetHeaders = [
      {
        key: 'Cache-Control',
        value: `public, max-age=${oneYearInSeconds}, immutable`,
      },
      {
        key: 'Expires',
        value: oneYearFromNow,
      },
    ];

    return [
      {
        source: '/_next/static/:path*',
        headers: longLivedAssetHeaders,
      },
      {
        source: '/_next/image/:path*',
        headers: longLivedAssetHeaders,
      },
      {
        source:
          '/:path*\\.(jpg|jpeg|png|gif|webp|avif|ico|svg|css|js|woff|woff2|ttf|otf)',
        headers: longLivedAssetHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
