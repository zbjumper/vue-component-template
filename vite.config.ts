import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'custom-component'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        dir: 'lib',
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()]
});
