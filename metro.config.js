const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const mergeConfig = require("metro-config").mergeConfig;

// Get the default Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Add SVG support and transformer configuration
const customConfig = {
  transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    // Remove SVG from asset extensions
    assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== "svg"),
    // Add SVG to source extensions
    sourceExts: [...defaultConfig.resolver.sourceExts, "svg"],
  },
};

// Merge the configurations and apply NativeWind
const finalConfig = mergeConfig(defaultConfig, customConfig);

module.exports = withNativeWind(finalConfig, { input: "./app/globals.css" });
