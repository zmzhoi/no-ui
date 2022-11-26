const path = require('path');

const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const eslint = require('@rollup/plugin-eslint');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');

const pkg = require('./package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const babelConfigPath = path.resolve(__dirname, '..', '..', 'babel.config.js');

const config = {
  input: './src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
    }),
    babel({
      extensions,
      babelHelpers: 'bundled',
      configFile: babelConfigPath,
    }),
    commonjs({
      extensions,
    }),
    replace({
      __VERSION__: JSON.stringify(pkg.version),
      preventAssignment: true,
    }),
    postcss({
      minimize: true,
      plugins: [autoprefixer()],
    }),
    peerDepsExternal(),
  ],
};

module.exports = config;
