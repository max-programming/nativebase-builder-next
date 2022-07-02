const tsconfig = require('./tsconfig.json');
let rawAlias = tsconfig.compilerOptions.paths;
let alias = {};

for (let x in rawAlias) {
  alias[x.replace('/*', '')] = rawAlias[x].map(p => p.replace('/*', ''));
}

module.exports = {
  presets: ['@native-base/next-adapter/babel'],
  plugins: [
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias,
      },
    ],
  ],
};
