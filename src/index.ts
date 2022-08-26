import {createFilter} from 'rollup-pluginutils';

const mdString = () => {
    const filter = createFilter(['**/*.md']);
    return {
        name: 'mdString',
        transform(md: string, id: string) {
            if (!filter(id)) {
                return null
            }
            return {
                code: `export default ${JSON.stringify(md)};`
            }
        }
    }
}

export default mdString
