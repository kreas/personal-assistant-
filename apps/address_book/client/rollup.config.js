import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
// import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    sourcemap: true
  },
  name: 'address_book',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        ["@babel/plugin-proposal-decorators", { decoratorsBeforeExport: true }],
        ["@babel/plugin-proposal-class-properties", { loose: true }],
        ["@babel/plugin-proposal-pipeline-operator", { "proposal": "fsharp" }]
      ]
    })
  ]
}
