module.exports = {
  displayName: "Frontend.Components",
  preset: "../../../jest.preset.js",
  transform: {
    "^.+\\.[tj]sx?$": ["babel-jest", { cwd: __dirname, configFile: "./babel-jest.config.json" }],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/Libraries/Frontend/Components",
};
