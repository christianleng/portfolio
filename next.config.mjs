import withMDX from '@next/mdx';

const nextConfig = withMDX({
  extension: /\.mdx$/,
  options: {
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default {
  ...nextConfig,
  reactStrictMode: true,
};
