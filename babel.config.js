module.exports = function (api) {
  api.cache(true);

  const plugins = [
    // enable parsing of Flow syntax in node_modules (expo packages)
    '@babel/plugin-syntax-flow',
  ];

  // Only include react-native-reanimated plugin for native builds (avoid web bundling error)
  const isWeb = process.env.BABEL_ENV === 'web' || process.env.EXPO_WEB === 'true' || process.env.REACT_NATIVE_WEB === 'true';
  if (!isWeb) {
    plugins.push('react-native-reanimated/plugin');
  }

  return {
    // enable transformImportMeta polyfill for packages that use import.meta (e.g. zustand esm builds)
    presets: [
      ['babel-preset-expo', { unstable_transformImportMeta: true }]
    ],
    plugins,
  };
};