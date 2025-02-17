import { defineConfig } from '@modern-js/self/defineConfig';

export default defineConfig({
  buildConfig: {
    buildType: 'bundleless',
    dts: {
      distPath: './types',
    },
    outDir: './dist/bundleless-dist-path',
  },
});
