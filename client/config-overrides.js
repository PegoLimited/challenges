/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { addWebpackAlias } = require("customize-cra");
const { override } = require("customize-cra");
const addLessLoader = require("customize-cra-less-loader");
const path = require("path");

module.exports = override(
  addLessLoader({
    // If you are using less-loader@5 or older version, please spread the lessOptions to options directly.
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: { "@base-color": "#880061" },
    },
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, "src"),
  })
);
