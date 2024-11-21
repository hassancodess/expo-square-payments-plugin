const { withProjectBuildGradle } = require("@expo/config-plugins");

const withAndroidPlugin = (config) => {
  return withProjectBuildGradle(config, (config) => {
    const buildScriptExt = `
    \t\tsquipVersion = 1.6.6
`;

    config.modResults.contents = config.modResults.contents.replace(
      /ext\s*{([\s\S]*?)}/,
      (match, existingContent) => {
        return `ext {\n\t\t${existingContent.trim()}\n\t\t${buildScriptExt.trim()}\n}`;
      }
    );
    return config;
  });
};

module.exports = withAndroidPlugin;
