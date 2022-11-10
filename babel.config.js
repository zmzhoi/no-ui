let babelConfig;
const env = process.env.NODE_ENV;

if (env === 'test') {
  babelConfig = {
    presets: ['@zmzhoi/babel-preset-react'],
  };
} else {
  babelConfig = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      '@babel/preset-typescript',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  };
}

module.exports = babelConfig;
