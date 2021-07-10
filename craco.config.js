const path = require('path');

const aliases = {
  '@api': 'shared/utils/api',
  '@components': 'shared/components',
  '@hooks': 'shared/hooks',
  '@store': 'shared/store',
  '@theme': 'shared/theme',
  '@utils': 'shared/utils',
};

const resolveAliases = (prefix = 'src') =>
  Object.keys(aliases).reduce(
    (acc, key) => ({
      ...acc,
      [key]: path.resolve(__dirname, prefix, aliases[key]),
    }),
    {},
  );

module.exports = { webpack: { alias: resolveAliases() } };
