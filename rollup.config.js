import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import bundleSize from 'rollup-plugin-filesize'
import autoExternal from 'rollup-plugin-auto-external'
import run from 'rollup-plugin-run'
import json from 'rollup-plugin-json'
import html from 'rollup-plugin-html'

const dev = process.env.ROLLUP_WATCH === 'true'

export const config = {
  input: './index.ts',
  output: {
    dir: 'dist/',
    format: 'cjs',
  },
  plugins: [
    json(),
    html(),
    autoExternal(),
    typescript({
      include: [ '*.ts', '*/**/*.ts' ]
    }),
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.json', '.gql'],
    }),
    commonjs(),
    bundleSize(),
    babel({
      exclude: 'node_modules/**',
    }),
    dev && run()
  ]
}

export default config