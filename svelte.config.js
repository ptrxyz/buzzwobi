import sveltePreprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
// import pkg from './package.json'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        scss: { prependData: `@import 'src/lib/theme.scss';` },
    }),
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        // adapter: node(),
        adapter: adapter({
            // default options are shown
            pages: 'docs',
            assets: 'docs',
            fallback: null,
        }),

        paths: {
            base: '/buzzwobi/',
        },

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',

        vite: {
            ssr: {
                // noExternal: Object.keys(pkg.dependencies || {}),
            },
        },
        // ssr: false,
        // hydrate: false,
        //router: false,
    },
}

export default config
