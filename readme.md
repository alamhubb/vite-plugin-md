# vite-plugin-md-string

### get markdown string from *.md

## usage

```js
import mdString from "vite-plugin-md-string";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), mdString()],
    server: {
        host: "0.0.0.0"
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
```
