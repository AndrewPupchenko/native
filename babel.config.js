const presets = ["babel-preset-expo"]
const plugins = [
  "react-native-reanimated/plugin",
  [
    "module-resolver",
    {
      root: ["./src/shared"],
      extensions: [".js", ".json"],
      alias: {
        "@shared": "./src/shared", '@features': "./src/features"
      },
    },
  ],
]

module.exports = function (api) {
  api.cache(true)
  return {
    presets,
    plugins,
  }
}
