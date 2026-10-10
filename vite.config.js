import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// The dev server watches this directory tree. Generated and QA output
// (a702/, dist/ and output/) is written by build:all and the Playwright suites,
// so watching it retriggers the watcher on every build and can end the process
// with ECANCELED. Only parent source is hand-edited, so those trees stay out of
// the watcher. The a702 mirror has its own build command when it needs a server.
const generated = ['**/a702/**', '**/dist/**', '**/output/**'];

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: { alias: { buffer: 'buffer/' } },
  server: { watch: { ignored: generated } },
});
