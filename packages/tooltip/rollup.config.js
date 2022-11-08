const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const eslint = require('@rollup/plugin-eslint');
const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');

const pkg = require('./package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

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
    }),
    commonjs({
      extensions,
    }),
    // replace({
    //   __BUILD_VERSION__: JSON.stringify(pkg.version),
    //   preventAssignment: true, // this option will be default on next version.
    // }),
    peerDepsExternal(),
  ],
  external: ['@no-ui/portal'],
};

module.exports = config;
