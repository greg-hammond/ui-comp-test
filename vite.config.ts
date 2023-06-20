import solid from 'solid-start/vite'
import { defineConfig } from 'vite'

// see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension
import devtools from 'solid-devtools/vite'

export default defineConfig({
	plugins: [
        devtools({
            /* additional options */
            autoname: true, // e.g. enable autoname
            // pass `true` or an object with options
            locator: {
                targetIDE: 'vscode',
                componentLocation: true,
                jsxLocation: true,
            },
        }),
        solid(),
    ],
})
