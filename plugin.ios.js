const { withXcodeProject } = require("@expo/config-plugins");

const withIOSPlugin = (config) => {
  return withXcodeProject(config, async (config) => {
    const project = config.modResults;


    const scriptPhase = {
      shellPath: '/bin/sh',
      shellScript: `
      ${project.getFirstTarget().uuid}\n
      FRAMEWORKS="\${BUILT_PRODUCTS_DIR}/\${FRAMEWORKS_FOLDER_PATH}"
      "\${FRAMEWORKS}/SquareInAppPaymentsSDK.framework/setup"
      `,
    };

    project.addBuildPhase(
      [],
      "PBXShellScriptBuildPhase",
      "RunScript",
      project.getFirstTarget().uuid,
      scriptPhase
    );

    return config;
  });
};

module.exports = withIOSPlugin;
