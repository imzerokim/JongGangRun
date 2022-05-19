// vite.config.js
const { resolve, join } = require('path');
const { defineConfig } = require('vite');
import { viteStaticCopy } from 'vite-plugin-static-copy';

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'data',
          dest: join(__dirname, 'dist'),
        },
      ],
    }),
  ],
});
