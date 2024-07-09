/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');
// import withLess from 'next-with-less'


const nextConfig = {};

module.exports = withLess({
  transpilePackages: ['antd'],
  lessLoaderOptions: {
    /* ... */
    additionalData: (content) =>
      `${content}\n\n@import '${pathToLessFileWithVariables}';`,
  },
});
