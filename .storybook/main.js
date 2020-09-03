const path = require('path');
const utils = require('../webpack/utils');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  stories: ['../stories/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-contexts',
  ],
  webpackFinal: config => {
    config.module.rules.push(
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
          // Optional
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: { implementation: require('sass') },
          },
        ],
      }
    );
    config.resolve.extensions.push('.ts', '.tsx');

    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src/main/webapp')];

    config.plugins.push(
      new CopyWebpackPlugin([
        { from: './node_modules/swagger-ui-dist/*.{js,css,html,png}', to: 'swagger-ui', flatten: true, ignore: ['index.html'] },
        { from: './node_modules/axios/dist/axios.min.js', to: 'swagger-ui' },
        { from: './src/main/webapp//swagger-ui/', to: 'swagger-ui' },
        { from: './src/main/webapp/content/', to: 'content' },
        { from: './src/main/webapp/favicon.ico', to: 'favicon.ico' },
        { from: './src/main/webapp/manifest.webapp', to: 'manifest.webapp' },
        // jhipster-needle-add-assets-to-webpack - JHipster will add/remove third-party resources in this array
        { from: './src/main/webapp/robots.txt', to: 'robots.txt' },
      ]),
    );

    return config;
  },
};
