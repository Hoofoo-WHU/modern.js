import appTools, { defineConfig } from '@modern-js/app-tools';
import pluginSwc from '@modern-js/plugin-swc';

export default defineConfig({
  tools: {
    swc: {
      cssMinify: true,
    },
  },
  source: {
    entries: {
      index: './src/index.js',
    },
  },
  plugins: [appTools(), pluginSwc()],
});
