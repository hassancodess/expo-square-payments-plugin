const withIOSPlugin = require("./plugin.ios.js");
const withAndroidPlugin = require("./plugin.android.js");

const squareUpConfigPlugin = (config) => {
  config = withIOSPlugin(config);
  config = withAndroidPlugin(config);
  return config;
};

module.exports = squareUpConfigPlugin;
