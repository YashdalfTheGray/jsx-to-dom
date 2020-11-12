import * as babelCore from '@babel/core';

const babelConfiguration: babelCore.TransformOptions = {
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

export default babelConfiguration;
