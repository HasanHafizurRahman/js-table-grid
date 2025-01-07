// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/js-table.min.js',
      format: 'umd',
      name: 'JsTable',
      plugins: [terser()],
    },
    {
      file: 'dist/js-table.js',
      format: 'es',
      name: 'JsTable',
    },
  ],
  plugins: [
    postcss({
      // Automatically processes CSS in your imports
      extract: true, // Extract CSS into a separate file
      minimize: true, // Minimize the CSS
    }),
  ],
};
