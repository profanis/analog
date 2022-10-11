/// <reference types="vitest" />

import nitro from '@analogjs/nitro';
import angular from '@analogjs/vite-plugin-angular';
import { offsetFromRoot } from '@nrwl/devkit';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: 'src',
    server: {
      port: 3000,
    },
    optimizeDeps: {
      include: ['@angular/common', '@angular/forms'],
    },
    build: {
      outDir: `${offsetFromRoot('apps/analog-app/src')}/dist/apps/analog-app`,
      emptyOutDir: true,
      target: 'es2020',
    },
    resolve: {
      mainFields: ['module'],
    },
    plugins: [
      angular({
        inlineStylesExtension: 'scss',
      }),
      visualizer() as Plugin,
      splitVendorChunkPlugin(),
      nitro({
        srcDir: './src/server/',
        output: {
          serverDir: `../${offsetFromRoot('apps/analog-app/src')}/dist/server`,
        },
        port: 8088,
        dev: mode !== 'production',
      }) as Plugin,
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['test-setup.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `${offsetFromRoot('apps/analog-app/src')}/node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
