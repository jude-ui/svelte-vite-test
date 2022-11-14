import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import autoprefixer from "autoprefixer";
// import dns from 'dns'

// dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
  return {
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
    },
    resolve: {
      alias: [{ find: "@", replacement: `${__dirname}/src` }],
    },
    build: {
      outDir: "docs",
      sourcemap: true,
      // cssCodeSplit: false,
    },
    preview: {
      port: 8000,
    },
    server: {
      host: true,
      port: 8080,
    },
    base: "./",
    plugins: [svelte()],
  };
});
