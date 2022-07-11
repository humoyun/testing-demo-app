/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports = function override(config) {
  config.resolve.alias['src'] = path.join(__dirname, './src');
  config.resolve.alias['@components'] = path.join(
    __dirname,
    './src/components/'
  );
  config.resolve.alias['@utils'] = path.join(__dirname, './src/utils');
  return config;
};
