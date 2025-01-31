import withMDX from '@next/mdx';

const isProd = process.env.NODE_ENV === "production";
const nextConfig = withMDX({
  extension: /\.mdx$/,
  options: {},
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default {
  ...nextConfig,
  reactStrictMode: true,
  assetPrefix: isProd ? "/portfolio/" : "", 
  images: {
    unoptimized: true,
  },
  output: "export", 
};
