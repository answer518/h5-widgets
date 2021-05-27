import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve' // 帮助寻找node_modules里的包
import { name } from '../package.json'

const overrides = {
    compilerOptions: { declaration: true },
    exclude: [
        "node_modules"
    ],
}

const file = type => `dist/${name}.${type}.js`
export { name, file }

export default {
    input: 'src/index.ts',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        nodeResolve(),
        typescript({ tsconfigOverride: overrides }),
        vue(),
        css({ output: 'bundle.css' })
    ],
    external: ['vue', 'lodash-es']
}
