export default {
  presets: [
    [
      '@babel/preset-react',
      {
        pragma: 'createElement',
        pragmaFrag: 'createFragment',
      },
    ],
  ],
};
