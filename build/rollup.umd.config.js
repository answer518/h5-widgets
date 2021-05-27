import basicConfig, { file } from './rollup.config'
export default {
    ...basicConfig,
    output: {
        name: 'H5Widget',
        file: file('umd'),
        format: 'umd',
        globals: {
            'vue': 'Vue',
            'lodash': '_'
        },
        exports: 'named'
    }
}