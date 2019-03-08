const {
  addLessLoader,
  fixBabelImports,
  addBabelPlugins,
  override
} = require("customize-cra");

module.exports = {
  webpack: override(
    addLessLoader({
      javascriptEnabled: true
    }),
    //自动引入插件
    fixBabelImports("babel-plugin-import", {
      libraryName: "antd-mobile",
      style: true
    }),
    addBabelPlugins([ "@babel/plugin-proposal-decorators", { "legacy": true } ])
  )
};