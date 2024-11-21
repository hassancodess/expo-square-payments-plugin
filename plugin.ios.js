const { withXcodeProject } = require("@expo/config-plugins");

const withIOSPlugin = (config) => {
  return withXcodeProject(config, async (config) => {
    const project = config.modResults;

    const scriptPhase = {
      shellPath: '/bin/sh',
      shellScript: `
      FRAMEWORKS="\${BUILT_PRODUCTS_DIR}/\${FRAMEWORKS_FOLDER_PATH}"
      "\${FRAMEWORKS}/SquareInAppPaymentsSDK.framework/setup"
      `,
    };

    project.addBuildPhase(
      [],
      "PBXShellScriptBuildPhase",
      "Run Script",
      project.getFirstTarget().uuid,
      scriptPhase
    );

    return config;
  });
};

module.exports = withIOSPlugin;
