import * as babelCore from '@babel/core';

export const babelConfigForJs: babelCore.TransformOptions = {
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

export const babelConfigForTs: babelCore.TransformOptions = {
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
