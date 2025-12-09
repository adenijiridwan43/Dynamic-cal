const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Ensure Metro resolves fonts/assets and common web source extensions
defaultConfig.resolver = defaultConfig.resolver || {};
defaultConfig.resolver.assetExts = [
  // keep existing assetExts (if any) and ensure font/asset types are present
  ...(defaultConfig.resolver.assetExts || []),
  'ttf',
  'otf',
  'woff',
  'woff2',
  'eot',
  'svg',
  'png',
  'jpg',
  'jpeg',
  'gif',
];
defaultConfig.resolver.sourceExts = [
  ...(defaultConfig.resolver.sourceExts || []),
  'cjs',
  'web.js',
  'web.ts',
  'web.tsx',
];

module.exports = defaultConfig;
