const fs = require('fs');
const basePath = __dirname;

module.exports = {
  webpack: (config) => {
    config.resolve.alias['react'] = fs.realpathSync(
      `${basePath}/node_modules/react`
    );
    config.resolve.alias['react-dom'] = fs.realpathSync(
      `${basePath}/node_modules/react-dom`
    );
    return config;
  },
};
