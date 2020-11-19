import * as babelCore from '@babel/core';

export const javascriptConfig: babelCore.TransformOptions = {
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

export const typescriptConfig: babelCore.TransformOptions = {
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
        allExtensions: true,
        jsxPragma: 'createElement',
      },
    ],
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
