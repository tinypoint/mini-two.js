const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const common = require("./webpack.common.js");

const commonConifg = merge(common, {
  mode: "development"
});
const minifyConifg = merge(common, {
  mode: "production",
  output: {
    filename: "mini-two.min.js"
  },
  plugins: [new BundleAnalyzerPlugin({})]
});

webpack([commonConifg, minifyConifg], (err, stats) => {
  if (err || stats.hasErrors()) {
    // 在这里处理错误
  }
  // 处理完成
  console.log("done");
});
