import * as babelCore from '@babel/core';

const javascript: babelCore.TransformOptions = {
  presets: [
    [
      '@babel/preset-react',
      {
        pragma: 'createElement',
        pragmaFrag: 'createFragment',
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};

const typescript: babelCore.TransformOptions = {
  presets: [
    [
      '@babel/preset-react',
      {
        pragma: 'createElement',
        pragmaFrag: 'createFragment',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        jsxPragma: 'createElement',
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};

export default { javascript, typescript };
